"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import { fetchProjectById, updateProject, fetchTechList } from "@/lib/api.client";

export default function EditProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<any>(null);
  const [techOptions, setTechOptions] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    // 프로젝트 + 기술 목록 동시에 가져오기
    Promise.all([
      fetchProjectById(id as string),
      fetchTechList(),
    ]).then(([projectData, techData]) => {
      setProject(projectData);
      setTechOptions(techData);
    });
  }, [id]);

  if (!project) return <p>로딩중...</p>;

  const handleUpdate = async (data: any) => {
    await updateProject(id as string, data);
    router.push("/projects");
  };

  return (
    <>
      <ProjectForm
        techOptions={techOptions}
        initialData={{
          ...project,
          startDate: project.startDate?.slice(0, 10),
          endDate: project.endDate?.slice(0, 10) ?? "",
          techIds: project.techs?.map((t: any) => t.tech_id) ?? [],
        }}
        onSubmit={handleUpdate}
        isEdit
      />
    </>
  );
}