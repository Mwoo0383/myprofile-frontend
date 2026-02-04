import { getToken } from "@/lib/auth";
import { Project } from "@/types/project";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function authHeaders(): HeadersInit {
  const token = getToken();
  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}

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

// 🔐 관리자 전용 - 생성
export async function createProject(dto: any) {
  const res = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify(dto),
  });

  if (!res.ok) throw new Error("프로젝트 생성 실패");
  return res.json();
}

// 🔐 관리자 전용 - 삭제
export async function deleteProject(id: number) {
  const res = await fetch(`${BASE_URL}/projects/${id}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
    },
  });

  if (!res.ok) throw new Error("프로젝트 삭제 실패");
}