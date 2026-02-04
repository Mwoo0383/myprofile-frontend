import { Project } from "@/types/project";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * 프로젝트 목록 조회
 */
export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("프로젝트 목록 조회 실패");
  }

  return res.json();
}

/**
 * 프로젝트 상세 조회
 */
export async function fetchProjectById(id: string): Promise<Project> {
  const res = await fetch(`${BASE_URL}/projects/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("프로젝트 상세 조회 실패");
  }

  return res.json();
}