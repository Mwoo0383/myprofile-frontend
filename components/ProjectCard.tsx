import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  techs: string[];
  startDate: string;
  endDate: string | null;
};

export default function ProjectCard({ project }: { project: Project }) {
  const isOngoing = project.endDate === null;

  return (
    <Link href={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          transition: "0.2s",
        }}
      >
        {/* 제목 + 상태 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>
            {project.title}
          </h3>

          <span
            style={{
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 999,
              background: isOngoing ? "#dcfce7" : "#f3f4f6",
              color: isOngoing ? "#166534" : "#374151",
            }}
          >
            {isOngoing ? "진행중" : "완료"}
          </span>
        </div>

        {/* 설명 */}
        <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 12 }}>
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.techs.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 12,
                background: "#f3f4f6",
                padding: "4px 8px",
                borderRadius: 999,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
