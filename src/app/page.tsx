import api from "@/api";
import Link from "next/link";

export default async function Home() {
  const caseStudies = await api.caseStudy.list();
  return (
    <article className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
      {caseStudies.map((caseStudy) => (
        <Link key={caseStudy.id} href={`${caseStudy.id}`}>
          <hgroup className="grid gap-2">
            <img
              src={caseStudy.hero_image}
              height={256}
              className="w-full object-cover"
              alt="case-study-image"
            />
            <div>
              <h2 className="font-bold text-2xl">{caseStudy.title}</h2>
              <p className="opacity-80">{caseStudy.teaser}</p>
            </div>
          </hgroup>
        </Link>
      ))}
    </article>
  );
}
