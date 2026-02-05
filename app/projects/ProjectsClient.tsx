"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import { isLoggedIn } from "@/lib/auth";
import { deleteProject } from "@/lib/api.client";

export default function ProjectsClient({
  projects,
}: {
  projects: Project[];
}) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [items, setItems] = useState(projects);

  useEffect(() => {
    setIsAdmin(isLoggedIn());
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await deleteProject(id);
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      {/* 관리자 전용 버튼 */}
      {isAdmin && (
        <div style={{ marginBottom: 16 }}>
          <Link href="/projects/new">
            <button
              style={{
                padding: "8px 12px",
                borderRadius: 6,
                border: "none",
                background: "#16a34a",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              + 프로젝트 생성
            </button>
          </Link>
        </div>
      )}

      <div style={{ display: "grid", gap: 16 }}>
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isAdmin={isAdmin}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}
