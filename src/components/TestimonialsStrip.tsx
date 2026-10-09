import {
  featuredTestimonials,
  moreTestimonials,
  zillowReviews,
  type Testimonial,
} from "@/data/testimonials";

function QuoteCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-pine-200 bg-white p-6">
      <blockquote className="text-pine-800">&ldquo;{item.quote}&rdquo;</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-pine-900">
        {item.name}
        <span className="font-medium text-pine-600">, {item.role}</span>
      </figcaption>
    </figure>
  );
}

/**
 * Approved Zillow quotes. Renders nothing if the lists are empty.
 */
export default function TestimonialsStrip() {
  if (featuredTestimonials.length === 0 && moreTestimonials.length === 0) return null;

  return (
    <section id="testimonials" className="border-t border-pine-100 bg-sage-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-pine-900">What clients say</h2>
        <p className="mt-3">
          <a
            href={zillowReviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 hover:text-clay-800"
          >
            {zillowReviews.label}
          </a>
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredTestimonials.map((item) => (
            <QuoteCard key={`${item.name}-${item.quote.slice(0, 24)}`} item={item} />
          ))}
        </div>
        {moreTestimonials.length > 0 && (
          <details className="group mt-8">
            <summary className="cursor-pointer list-none text-sm font-semibold text-clay-700 hover:text-clay-800 [&::-webkit-details-marker]:hidden">
              <span className="underline decoration-clay-300 underline-offset-2 group-open:no-underline">
                More reviews
              </span>
            </summary>
            <div className="mt-6 flex flex-col gap-6">
              {moreTestimonials.map((item) => (
                <QuoteCard key={`${item.name}-${item.datePublished}`} item={item} />
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
