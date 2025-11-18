import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <Container>
        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/">Sheet2Scene</Link>
          <Link href="/mondes">Mondes</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </Container>
    </header>
  );
}
