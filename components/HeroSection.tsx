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
        백엔드 개발자 <span style={{ color: "#2563eb" }}>강민우</span>입니다.
      </h1>

      <p
        style={{
          marginTop: 20,
          fontSize: 18,
          color: "#4b5563",
          maxWidth: 640,
        }}
      >
        서비스 구조와 안정성을 고민하며 개발합니다.  
        운영 환경을 고려한 백엔드 설계와 문제 해결에 관심이 있습니다.
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
