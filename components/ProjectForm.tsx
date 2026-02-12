"use client";

import { useEffect, useState } from "react";

export default function ProjectForm({
  techOptions,
  initialData,
  onSubmit,
  isEdit = false,
}: ProjectFormProps) {
  // 상태관리
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [githubUrl, setGithubUrl] = useState(initialData?.githubUrl ?? "");
  const [deployUrl, setDeployUrl] = useState(initialData?.deployUrl ?? "");
  const [startDate, setStartDate] = useState(initialData?.startDate ?? "");
  const [endDate, setEndDate] = useState(initialData?.endDate ?? "");
  const [selectedTechIds, setSelectedTechIds] = useState<number[]>(initialData?.techIds ?? []);
  
  useEffect(() => {
    if (!initialData) return;
  
    setTitle(initialData.title ?? "");
    setDescription(initialData.description ?? "");
    setGithubUrl(initialData.githubUrl ?? "");
    setDeployUrl(initialData.deployUrl ?? "");
    setStartDate(initialData.startDate ?? "");
    setEndDate(initialData.endDate ?? "");
    setSelectedTechIds(initialData.techIds ?? []);
  }, [initialData]);
  

  const toggleTech = (id: number) => {
    setSelectedTechIds((prev) =>
      prev.includes(id)
        ? prev.filter((techId) => techId !== id)
        : [...prev, id]
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ 
          title, 
          description, 
          githubUrl, 
          deployUrl, 
          startDate,
          endDate: endDate || null,
          techIds: selectedTechIds,
        });
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

      {/* 프로젝트 시작일 */}
      <Field label="프로젝트 시작일">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={inputStyle}
      />
      </Field>

      {/* 프로젝트 종료일 */}
      <Field label="프로젝트 종료일 (선택)">
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={inputStyle}
      />
      </Field>

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

      {/* deploy URL */}
      <Field label="배포 URL">
        <input
          placeholder="https://www.deploy-project.com"
          value={deployUrl}
          onChange={(e) => setDeployUrl(e.target.value)}
          style={inputStyle}
        />
      </Field>

      {/* 기술 스택 */}
      <Field label="기술 스택 선택">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {techOptions.map((tech) => (
            <label
              key={tech.tech_id}
              style={{
                padding: "6px 10px",
                borderRadius: 16,
                cursor: "pointer",
                background: selectedTechIds.includes(tech.tech_id)
                  ? "#2563eb"
                  : "#e5e7eb",
                color: selectedTechIds.includes(tech.tech_id)
                  ? "#fff"
                  : "#000",
              }}
            >
              <input
                type="checkbox"
                checked={selectedTechIds.includes(tech.tech_id)}
                onChange={() => toggleTech(tech.tech_id)}
                style={{ display: "none" }}
              />
              {tech.name}
            </label>
          ))}
        </div>
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
