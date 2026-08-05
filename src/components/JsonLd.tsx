/**
 * Renders a JSON-LD structured data block. `data` is always our own
 * server-built object (never user input), but we still guard against a
 * literal "</script>" substring breaking out of the tag.
 */
export default function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
