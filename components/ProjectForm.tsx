import { useState } from "react";

type ProjectFormProps = {
    initialData?: {
      title: string;
      description: string;
      githubUrl?: string;
      thumbnailUrl?: string;
    };
    onSubmit: (data: any) => void;
    isEdit?: boolean;
  };
  
  export default function ProjectForm({
    initialData,
    onSubmit,
    isEdit = false,
  }: ProjectFormProps) {
    const [title, setTitle] = useState(initialData?.title ?? "");
    const [description, setDescription] = useState(initialData?.description ?? "");
    const [githubUrl, setGithubUrl] = useState(initialData?.githubUrl ?? "");
  
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ title, description, githubUrl });
        }}
      >
        <input
          placeholder="프로젝트 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <textarea
          placeholder="프로젝트 설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
  
        <input
          placeholder="GitHub URL"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
        />
  
        <button type="submit">
          {isEdit ? "수정하기" : "생성하기"}
        </button>
      </form>
    );
}  