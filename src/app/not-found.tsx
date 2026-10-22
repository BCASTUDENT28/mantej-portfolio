export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>
        <p style={{ letterSpacing: ".2em", textTransform: "uppercase", fontSize: 12, opacity: 0.6 }}>404</p>
        <h1 style={{ fontWeight: 400, margin: "8px 0 20px" }}>This page isn&apos;t part of the reel.</h1>
        <a href="/" style={{ color: "#e0231c" }}>Back to the portfolio →</a>
      </div>
    </main>
  );
}
