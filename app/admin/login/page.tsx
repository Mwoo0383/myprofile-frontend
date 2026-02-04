export default function AdminLoginPage() {
    return (
      <main style={{ maxWidth: 400, margin: "120px auto" }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>
          관리자 로그인
        </h1>
  
        <div style={{ marginTop: 24 }}>
          <input
            type="password"
            placeholder="관리자 비밀번호"
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 12,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
            }}
          />
  
          <button
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "none",
              background: "#2563eb",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            로그인
          </button>
        </div>
      </main>
    );
}  