"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { setToken } from "@/lib/auth";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleLogin = async () => {
    const res = await fetch(
      `${BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
  
    console.log("status:", res.status);

    const data = await res.json();
    console.log("response body:", data);

    if (!res.ok) {
      setError(data.message ?? "로그인 실패");
      return;
    }

    const { accessToken } = data;
    setToken(accessToken);
    router.replace("/projects");
  };
  

  return (
    <main style={{ maxWidth: 400, margin: "120px auto" }}>
      <h1 style={{ fontSize: 24, fontWeight: 800 }}>
        관리자 로그인
      </h1>
  
      {/* 이메일 */}
      <input
        type="email"
        placeholder="관리자 이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 24,
          borderRadius: 8,
          border: "1px solid #e5e7eb",
        }}
      />
  
      {/* 비밀번호 */}
      <input
        type="password"
        placeholder="관리자 비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 12,
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
        type="button"
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
