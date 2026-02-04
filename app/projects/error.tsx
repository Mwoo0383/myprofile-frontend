"use client";

export default function ErrorPage({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main style={{ maxWidth: 960, margin: "80px auto", padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700 }}>
        프로젝트 목록을 불러오지 못했습니다
      </h2>

      <p style={{ marginTop: 8, color: "#6b7280" }}>
        {error.message}
      </p>

      <button
        onClick={reset}
        style={{
          marginTop: 16,
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #e5e7eb",
          cursor: "pointer",
        }}
      >
        다시 시도
      </button>
    </main>
  );
}
