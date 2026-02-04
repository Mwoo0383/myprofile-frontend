"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700 }}>
        문제가 발생했습니다
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