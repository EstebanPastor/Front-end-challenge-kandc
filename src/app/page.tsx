import api from "@/api";

export default async function Home() {
  const caseStudies = await api.caseStudy.list();
  return (
    <article>
      {caseStudies.map((caseStudy) => (
        <hgroup key={caseStudy.id}>
          <img
            src={caseStudy.hero_image}
            height={256}
            className="w-full object-cover"
            alt="case-study-image"
          />
          <h2>{caseStudy.title}</h2>
          <p>{caseStudy.teaser}</p>
        </hgroup>
      ))}
    </article>
  );
}
