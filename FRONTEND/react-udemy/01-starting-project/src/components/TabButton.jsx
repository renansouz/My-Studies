export default function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={onClick} aria-label={`Tab for ${children}`}>
        {children}
      </button>
    </li>
  );
}
