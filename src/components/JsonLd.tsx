/**
 * Renders a JSON-LD structured-data <script> tag.
 * Used to feed Google rich-result data (Organization, Product, Breadcrumbs, etc.).
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, server-generated content — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
