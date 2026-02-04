import { Project } from "@/types/project";
import { formatProjectPeriod } from "@/lib/date";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getProject(id: string): Promise<Project> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("프로젝트 상세 조회 실패");
  }

  return res.json();
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params; // ⭐ 핵심
  const project = await getProject(id);

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
