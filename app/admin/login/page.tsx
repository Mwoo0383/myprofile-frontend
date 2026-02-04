"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { setAdmin } from "@/lib/adminAuth";

const ADMIN_PASSWORD = "admin123"; // env로 빼도 됨

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAdmin();
      router.push("/admin");
    } else {
      setError("비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <main style={{ maxWidth: 400, margin: "120px auto" }}>
      <h1 style={{ fontSize: 24, fontWeight: 800 }}>
        관리자 로그인
      </h1>

      <input
        type="password"
        placeholder="관리자 비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 24,
          borderRadius: 8,
          border: "1px solid #e5e7eb",
        }}
      />

      {error && (
        <p style={{ color: "red", marginTop: 8 }}>
          {error}
        </p>
      )}

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          marginTop: 16,
          padding: 12,
          borderRadius: 8,
          border: "none",
          background: "#2563eb",
          color: "#fff",
          fontWeight: 600,
        }}
      >
        로그인
      </button>
    </main>
  );
}
