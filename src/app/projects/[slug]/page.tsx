import Template from "@/components/Projects/template";
import { projectDetails } from "@/components/Projects/data";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projectDetails.find((p) => p.slug === params.slug);

    if(!project) return notFound()

    return (
        <Template {...project} />
    );
}