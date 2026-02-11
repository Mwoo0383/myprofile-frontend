"use client";

import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import { isLoggedIn } from "@/lib/auth";

export default function Header() {
  const loggedIn = isLoggedIn();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 24,
      }}
    >
      <Link href="/projects">
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>
        Projects
       </h1>
      </Link>

      {loggedIn && <LogoutButton />}
    </header>
  );
}