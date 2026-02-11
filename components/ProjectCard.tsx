import Link from "next/link";
import { Project } from "@/types/project";

export default function ProjectCard({
  project,
  isAdmin,
  onDelete,
}: {
  project: Project;
  isAdmin?: boolean;
  onDelete?: (id: number) => void;
}) {
  return (
    <div style={{ border: "1px solid #e5e7eb", padding: 16, borderRadius: 8 }}>
      <Link
        href={`/projects/${project.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3 style={{ cursor: "pointer" }}>
          {project.title}
        </h3>
      </Link>

      {isAdmin && (
        <div style={{ marginTop: 8 }}>
          <Link href={`/projects/${project.id}/edit`}>수정</Link>
          {" | "}
          <button
            onClick={() => onDelete?.(project.id)}
            style={{
              border: "none",
              background: "none",
              color: "red",
              cursor: "pointer",
            }}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
}
