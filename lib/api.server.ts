import Error from "@/app/projects/error";
import { Project } from "@/types/project";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * 🔓 공개 프로젝트 목록 조회 (Server 전용)
 */
export async function fetchProjectsServer(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    Error;
  }

  return res.json();
}

/**
 * 🔓 프로젝트 상세 조회 (Server 전용)
 */
export async function fetchProjectByIdServer(id: string): Promise<Project> {
  const res = await fetch(`${BASE_URL}/projects/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    Error;
  }

  return res.json();
}