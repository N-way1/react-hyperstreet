export default function TabButton({ children, onSelect,isSelected }) {
  return (
    <li className="px-2">
      <button className={`text-main ${isSelected ? "active" : undefined}`} onClick={onSelect}>{children}</button>
    </li>
  );
}
