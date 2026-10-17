import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/contents/projects";
import ProjectDetailsContent from "@/components/projects/ProjectDetailsContent";

type ProjectDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: "article",
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsContent project={project} />;
}