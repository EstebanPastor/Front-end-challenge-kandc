import api from "@/api";
import Link from "next/link";

export default async function IdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const caseStudy = await api.caseStudy.fetch(Number(id));
  return (
    <article className="grid gap-8">
      <Link href="/" className="opacity-80">
        ← Back to list
      </Link>
      <hgroup className="grid gap-8">
        <h2 className="font-medium text-4xl">{caseStudy.title}</h2>
        <img
          src={caseStudy.hero_image}
          height={256}
          className="w-full object-cover"
          alt="case-study-image"
        />
      </hgroup>
      {caseStudy.sections.map((section, index) => (
        <section className="grid gap-2" key={String(index)}>
          {section.title && (
            <h3 className="text-lg font-bold">{section.title}</h3>
          )}
          <section className="grid gap-2">
            {section.body_elements.map((element, index) =>
              typeof element === "string" ? (
                <p key={index}>{element}</p>
              ) : (
                <img
                  key={index}
                  src={element.image_url || caseStudy.title}
                  height={320}
                  className="w-full object-cover"
                  alt="element-image"
                />
              )
            )}
          </section>
        </section>
      ))}
    </article>
  );
}
