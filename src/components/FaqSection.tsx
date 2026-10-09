import JsonLd from "./JsonLd";
import { faqs, faqAnswerText, type FaqSegment } from "@/data/faqs";
import { faqPageSchema } from "@/lib/schema";

function Segment({ segment }: { segment: FaqSegment }) {
  if (segment.type === "text") return <>{segment.value}</>;
  const external = segment.href.startsWith("http");
  return (
    <a
      href={segment.href}
      className="font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 hover:text-clay-800"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {segment.label}
    </a>
  );
}

export default function FaqSection() {
  return (
    <section className="bg-sage-50 py-16 sm:py-20">
      <JsonLd
        data={faqPageSchema(faqs.map((faq) => ({ question: faq.question, answer: faqAnswerText(faq) })))}
      />
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
                {faq.segments.map((segment, i) => (
                  <Segment key={i} segment={segment} />
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
