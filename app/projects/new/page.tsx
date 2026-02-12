"use client";

import { useRouter } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import { createProject, fetchTechList } from "@/lib/api.client";
import { useEffect, useState } from "react";

export default function NewProjectPage() {
  const router = useRouter();
  const [techOptions, setTechOptions] = useState<any[]>([]);

  useEffect(() => {
    fetchTechList().then(setTechOptions);
  }, []);

  const handleCreate = async (data: any) => {
    await createProject(data);
    router.push("/projects");
  };

  return (
    <>
      <br></br>
      <ProjectForm
       techOptions={techOptions}
       onSubmit={handleCreate}
      />
    </>
  );
}