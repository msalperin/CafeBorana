import React, { useState } from 'react';
import "./dropdown.css";

const DropdownMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        Menú
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;