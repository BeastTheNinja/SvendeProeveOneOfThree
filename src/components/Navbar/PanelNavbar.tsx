import { NavLink } from "react-router";



type PanelNavbarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function PanelNavbar({ isOpen, onClose }: PanelNavbarProps) {
  return (
    <nav className={isOpen ? "panel-nav open" : "panel-nav"} >
      <ul>
        <li>
          <NavLink to="/" onClick={onClose}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={onClose}>
            Produkter
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" onClick={onClose}>
            Nyheder
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={onClose}>
            Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={onClose}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" onClick={onClose}>
            Register
          </NavLink>
        </li>
      </ul>
    </nav >
  );
}

export default PanelNavbar;