import { notFound } from "next/navigation";

export interface CaseStudy {
  id: number;
  client: string;
  teaser: string;
  vertical: string;
  is_enterprise: boolean;
  title: string;
  hero_image: string;
  sections: {
    title: null | string;
    body_elements: (
      | {
          image_url: string;
        }
      | string
    )[];
  }[];
}

const api = {
  caseStudy: {
    list: (): Promise<CaseStudy[]> =>
      fetch(
        "https://raw.githubusercontent.com/theappbusiness/engineering-challenge/main/endpoints/v1/caseStudies.json"
      )
        .then((res) => res.json() as Promise<{ case_studies: CaseStudy[] }>)
        .then((data) => data.case_studies),
    fetch: async (id: CaseStudy["id"]): Promise<CaseStudy> => {
      const caseStudy = await api.caseStudy
        .list()
        .then(
          (caseStudies) => caseStudies.find((caseStudy) => caseStudy.id === id)!
        );
      if (!caseStudy) {
       return notFound();
      }
      return caseStudy
    },
  },
};

export default api;
