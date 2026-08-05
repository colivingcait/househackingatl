import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sponsorInquiry } from "@/lib/site-config";

export const metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description: "What House Hacking Atlanta collects when you sign up, how it's used, and how to opt out.",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="prose prose-pine max-w-none">
          <p className="text-sm text-pine-500">Last updated August 2026.</p>

          <p>
            House Hacking Atlanta (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This page explains what
            we collect when you use this site, how it&rsquo;s used, and how to opt out at any time.
          </p>

          <h2>What we collect</h2>
          <p>When you submit one of the forms on this site, we collect:</p>
          <ul>
            <li>Your first name and email address, on every signup form.</li>
            <li>
              For listing alerts specifically: an optional target price range and areas you&rsquo;re watching, if you
              choose to provide them.
            </li>
            <li>Which free guide you requested, if you download one of our worksheets or checklists.</li>
          </ul>
          <p>
            We don&rsquo;t collect payment information, and we don&rsquo;t ask for anything beyond what&rsquo;s in
            the form itself.
          </p>

          <h2>How we use it</h2>
          <p>We use what you submit to:</p>
          <ul>
            <li>Send you the specific thing you signed up for — listing alerts, the newsletter, or a guide.</li>
            <li>Tag your submission internally (e.g. &ldquo;interested in listing alerts&rdquo;) so what we send you stays relevant.</li>
            <li>Occasionally send related updates — a new meetup date, a relevant guide — never unrelated marketing.</li>
          </ul>
          <p>
            We do not sell, rent, or trade your information to anyone, for any reason. We don&rsquo;t share your
            information with our Anchor Partners or Event Sponsors — sponsorship does not include any access to
            signups or attendee data.
          </p>

          <h2>Where it&rsquo;s stored</h2>
          <p>
            Signup form data is processed and stored by{" "}
            <a href="https://kit.com" target="_blank" rel="noopener noreferrer">
              Kit
            </a>{" "}
            (formerly ConvertKit), our email service provider. Kit&rsquo;s own privacy policy governs how they handle
            that data on our behalf.
          </p>

          <h2>Cookies and pixels</h2>
          <p>
            This site may use the Meta (Facebook) Pixel to measure the effectiveness of ads that bring people here,
            and standard analytics to understand which pages are useful. These tools may use cookies or similar
            technology in your browser. You can block them using your browser&rsquo;s privacy settings or an ad
            blocker without affecting your ability to use the site.
          </p>

          <h2>Your choices</h2>
          <p>
            Every email we send includes an unsubscribe link — one click removes you from that list. If you&rsquo;d
            like your information removed entirely, or have any other privacy question, email us at{" "}
            <a href={`mailto:${sponsorInquiry.contactEmail}`}>{sponsorInquiry.contactEmail}</a> and we&rsquo;ll handle
            it directly.
          </p>

          <h2>Children&rsquo;s privacy</h2>
          <p>This site is intended for adults evaluating real estate and financial decisions. We don&rsquo;t knowingly collect information from anyone under 18.</p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes in a meaningful way, we&rsquo;ll update the date at the top of this page. Continued
            use of the site after a change means you accept the updated policy.
          </p>

          <h2>Questions</h2>
          <p>
            Reach out any time at{" "}
            <a href={`mailto:${sponsorInquiry.contactEmail}`}>{sponsorInquiry.contactEmail}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
