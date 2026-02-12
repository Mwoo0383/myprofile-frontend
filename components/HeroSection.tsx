import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        marginTop: 120,
        textAlign: "left",
      }}
    >
      <h1
        style={{
          fontSize: 40,
          fontWeight: 900,
          lineHeight: 1.3,
        }}
      >
        안녕하세요,  
        <br />
        신입 웹 개발자 <span style={{ color: "#2563eb" }}>강민우</span>입니다.
      </h1>

      <p
        style={{
          marginTop: 20,
          fontSize: 18,
          color: "#4b5563",
          maxWidth: 640,
        }}
      >
        “왜 안 되지?”에서 끝나지 않는 개발자 강민우입니다.<br></br>
        구조를 이해하고 끝까지 파고들어 해결하는 것을 좋아합니다.
      </p>

      <div style={{ marginTop: 32 }}>
        <Link href="/projects">
          <button
            style={{
              padding: "12px 20px",
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 8,
              border: "none",
              background: "#2563eb",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            포트폴리오 보기 →
          </button>
        </Link>
      </div>
    </section>
  );
}
