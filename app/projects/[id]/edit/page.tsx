"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import { fetchProjectById, updateProject } from "@/lib/api.client";

export default function EditProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    fetchProjectById(id as string).then(setProject);
  }, [id]);

  if (!project) return <p>로딩중...</p>;

  const handleUpdate = async (data: any) => {
    await updateProject(id as string, data);
    router.push("/projects");
  };

  return (
    <>
      <ProjectForm
        initialData={project}
        onSubmit={handleUpdate}
        isEdit
      />
    </>
  );
}