import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f5f5f5" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}