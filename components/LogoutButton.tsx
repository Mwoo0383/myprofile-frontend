"use client";

import { useRouter } from "next/navigation";
import { clearToken } from "@/lib/auth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    clearToken();
    router.push("/admin/login"); // or "/"
  };

  return (
    <button onClick={handleLogout}>
      로그아웃
    </button>
  );
}
