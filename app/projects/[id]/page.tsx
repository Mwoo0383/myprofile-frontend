import { fetchProjectByIdServer } from "@/lib/api.server";
import { formatProjectPeriod } from "@/lib/date";
import { Project } from "@/types/project";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;

  console.log("받은 id:", id);

  const project: Project = await fetchProjectByIdServer(id);

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      {/* 제목 */}
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>
        {project.title}
      </h1>

      {/* 기간 */}
      <p style={{ color: "#6b7280", marginTop: 8 }}>
        기간: {formatProjectPeriod(project.startDate, project.endDate)}
      </p>

      {/* 기술 스택 */}
      <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {project.techs.map((tech) => (
          <span
            key={tech.tech_id}
            style={{
              backgroundColor: "#f3f4f6",
              padding: "6px 12px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>

      {/* 설명 */}
      <p style={{ marginTop: 24, lineHeight: 1.6 }}>
        {project.description}
      </p>

      {/* 링크 버튼 */}
      <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            style={{
              padding: "10px 16px",
              backgroundColor: "#111827",
              color: "white",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
        )}

        {project.deployUrl && (
          <a
            href={project.deployUrl}
            target="_blank"
            style={{
              padding: "10px 16px",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            배포 사이트
          </a>
        )}
      </div>
    </main>
  );
}
