
import { fetchProjectByIdServer } from "@/lib/api.server";
import { formatProjectPeriod } from "@/lib/date";
import { Project } from "@/types/project";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project: Project = await fetchProjectByIdServer(id);

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>
        {project.title}
      </h1>

      <p style={{ color: "#6b7280", marginTop: 8 }}>
        기간: {formatProjectPeriod(project.startDate, project.endDate)}
      </p>

      <p style={{ marginTop: 24 }}>
        {project.description}
      </p>
    </main>
  );
}