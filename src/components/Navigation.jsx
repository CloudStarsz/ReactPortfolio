import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navigation({ items, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="main-nav">
      <button
        className="menu-icon"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="main-navigation-menu"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
      <ul id="main-navigation-menu" className={isOpen ? "nav-menu active" : "nav-menu"}>
        {items.map((item) => (
          <li key={item.path} className={`nav-item ${item.mobileOnly ? "mobile-only" : ""}`}>
            <button type="button" onClick={() => handleClick(item.path)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
