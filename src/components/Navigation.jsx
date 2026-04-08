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
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        {items.map((item, index) => (
          <li key={index} className={`nav-item ${item.mobileOnly ? "mobile-only" : ""}`} onClick={() => handleClick(item.path)}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;