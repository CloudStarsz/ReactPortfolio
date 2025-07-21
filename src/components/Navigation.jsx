function Navigation({ items }) {
  return (
    <nav>
        <ul>
            {items.map((item, index) => (
                <li key={index} className="nav-item">
                {item}
                </li>
            ))}
        </ul>
    </nav>
  );
}

export default Navigation;