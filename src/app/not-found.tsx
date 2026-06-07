import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--forest)",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <div className="section-eyebrow" style={{ justifyContent: "center" }}>
          404 - Not found
        </div>
        <h1
          className="section-title"
          style={{ fontSize: "clamp(48px,5vw,72px)", color: "var(--linen)", marginBottom: 16 }}
        >
          This page <em style={{ fontStyle: "italic", color: "var(--gold)" }}>does not exist.</em>
        </h1>
        <p
          style={{
            color: "rgba(232,226,213,.55)",
            fontFamily: "var(--font-serif)",
            fontSize: 17,
            marginBottom: 36,
          }}
        >
          The page you were looking for has moved, or was never here.
        </p>
        <Link href="/" className="btn-gold">
          Return home
        </Link>
      </div>
    </main>
  );
}
