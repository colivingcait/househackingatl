import { execFileSync } from "child_process";
import fallbackDates from "@/data/article-dates.json";

export type ArticleDates = {
  datePublished: string;
  dateModified: string;
};

const fallback = fallbackDates as Record<string, ArticleDates>;

let resolved: Record<string, ArticleDates> | null = null;

function earlier(a: string, b: string): string {
  return new Date(a).getTime() <= new Date(b).getTime() ? a : b;
}

function later(a: string, b: string): string {
  return new Date(a).getTime() >= new Date(b).getTime() ? a : b;
}

/**
 * Newest-first `git log` over `blog/`. The first time a file appears is
 * dateModified; the last time is datePublished. A shallow clone only sees
 * the latest commit, so callers merge this with the committed snapshot.
 */
function readGitDates(): Record<string, ArticleDates> | null {
  try {
    const out = execFileSync("git", ["log", "--format=COMMIT %aI", "--name-only", "--", "blog"], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    const published: Record<string, string> = {};
    const modified: Record<string, string> = {};
    let date = "";
    for (const line of out.split("\n")) {
      if (line.startsWith("COMMIT ")) {
        date = line.slice("COMMIT ".length).trim();
        continue;
      }
      const file = line.trim();
      if (!file.startsWith("blog/") || !file.endsWith(".md") || !date) continue;
      if (!modified[file]) modified[file] = date;
      published[file] = date;
    }
    const result: Record<string, ArticleDates> = {};
    for (const file of Object.keys(published)) {
      result[file] = { datePublished: published[file], dateModified: modified[file] };
    }
    return Object.keys(result).length > 0 ? result : null;
  } catch {
    return null;
  }
}

/** Git history when this checkout has it, filled in from the committed snapshot otherwise. */
export function articleDatesByFile(): Record<string, ArticleDates> {
  if (resolved) return resolved;
  const git = readGitDates();
  const files = Object.keys(fallback);
  for (const file of Object.keys(git ?? {})) {
    if (!files.includes(file)) files.push(file);
  }
  const merged: Record<string, ArticleDates> = {};
  for (const file of files) {
    const fromFile = fallback[file];
    const fromGit = git?.[file];
    if (fromFile && fromGit) {
      merged[file] = {
        datePublished: earlier(fromFile.datePublished, fromGit.datePublished),
        dateModified: later(fromFile.dateModified, fromGit.dateModified),
      };
    } else {
      const dates = fromGit ?? fromFile;
      merged[file] = dates;
    }
  }
  resolved = merged;
  return merged;
}

export function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  }).format(new Date(iso));
}
