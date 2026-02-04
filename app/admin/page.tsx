"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";
import Link from "next/link";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/admin/login");
    }
  }, [router]);

  return (
    <main style={{ maxWidth: 960, margin: "80px auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>
        관리자 대시보드
      </h1>

      <ul style={{ marginTop: 24 }}>
        <li>
          <Link href="/admin/projects">
            프로젝트 관리 →
          </Link>
        </li>
      </ul>
    </main>
  );
}
