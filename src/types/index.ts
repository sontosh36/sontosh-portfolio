export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectChallenge = {
  title: string;
  solution: string;
};

export type ProjectCaseStudy = {
  problem?: string;
  solution?: string;
  features?: ProjectFeature[];
  challenges?: ProjectChallenge[];
  projectType?: string;
  role?: string;
};
export type project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
} & ProjectCaseStudy;
