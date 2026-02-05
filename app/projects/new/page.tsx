"use client";

import { useRouter } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import { createProject } from "@/lib/api.client";

export default function NewProjectPage() {
  const router = useRouter();

  const handleCreate = async (data: any) => {
    await createProject(data);
    router.push("/projects");
  };

  return (
    <>
      <h1>프로젝트 생성</h1>
      <ProjectForm onSubmit={handleCreate} />
    </>
  );
}