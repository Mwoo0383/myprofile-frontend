"use client";

import { useState } from "react";

type ProjectFormProps = {
  initialData?: {
    title: string;
    description: string;
    githubUrl?: string;
    techs?: string[];
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
  const [techStacks, setTechStacks] = useState<string[]>(
    initialData?.techs ?? []
  );
  const [techInput, setTechInput] = useState("");

  const addTech = () => {
    const value = techInput.trim();
    if (!value) return;
    if (techStacks.includes(value)) return;

    setTechStacks((prev) => [...prev, value]);
    setTechInput("");
  };

  const removeTech = (tech: string) => {
    setTechStacks((prev) => prev.filter((t) => t !== tech));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, description, githubUrl, techStacks });
      }}
      style={{
        maxWidth: 520,
        margin: "0 auto",
        padding: 24,
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: 700 }}>
        {isEdit ? "프로젝트 수정" : "프로젝트 생성"}
      </h2>

      {/* 프로젝트 제목 */}
      <Field label="프로젝트 제목">
        <input
          placeholder="예) MyProfile"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
      </Field>

      {/* 프로젝트 설명 */}
      <Field label="프로젝트 설명">
        <textarea
          placeholder="프로젝트에 대한 간단한 설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </Field>

      {/* GitHub URL */}
      <Field label="GitHub URL">
        <input
          placeholder="https://github.com/username/repository"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          style={inputStyle}
        />
      </Field>

      {/* 기술 스택 */}
      <Field label="기술 스택">
        <input
          placeholder="기술 입력 후 Enter (예: React)"
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTech();
            }
          }}
          style={inputStyle}
        />

        {techStacks.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {techStacks.map((tech) => (
              <span
                key={tech}
                onClick={() => removeTech(tech)}
                style={{
                  padding: "6px 10px",
                  borderRadius: 16,
                  background: "#f1f5f9",
                  fontSize: 13,
                  cursor: "pointer",
                }}
                title="클릭하면 삭제"
              >
                {tech} ✕
              </span>
            ))}
          </div>
        )}
      </Field>

      {/* 버튼 */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            background: isEdit ? "#2563eb" : "#16a34a",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {isEdit ? "수정하기" : "생성하기"}
        </button>
      </div>
    </form>
  );
}

/* ===== 공통 컴포넌트 & 스타일 ===== */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 14, fontWeight: 600 }}>{label}</label>
      {children}
    </div>
  );
}

const inputStyle = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #d1d5db",
};
