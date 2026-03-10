import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navigation({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="main-nav">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
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