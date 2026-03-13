import Template from "@/components/Projects/template";
import { projectDetails } from "@/components/Projects/data";
import { notFound } from "next/navigation";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <Template {...project} />;
}
