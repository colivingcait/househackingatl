import JsonLd from "./JsonLd";
import { faqs } from "@/data/faqs";
import { faqPageSchema } from "@/lib/schema";

const URL_PATTERN = /https?:\/\/[^\s.).,]+/g;

function AnswerText({ text }: { text: string }) {
  const parts = text.split(URL_PATTERN);
  const urls = text.match(URL_PATTERN) ?? [];
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {urls[i] && (
            <a
              href={urls[i]}
              className="font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 hover:text-clay-800"
              {...(urls[i].startsWith("https://www.househackingatl.com")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {urls[i]}
            </a>
          )}
        </span>
      ))}
    </>
  );
}

export default function FaqSection() {
  return (
    <section className="bg-sage-50 py-16 sm:py-20">
      <JsonLd data={faqPageSchema(faqs)} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">
          House hacking in Atlanta
        </h2>
        <div className="mt-8 flex flex-col gap-8">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-display text-lg font-semibold text-pine-900">{faq.question}</h3>
              <p className="mt-2 text-pine-800">
                <AnswerText text={faq.answer} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
