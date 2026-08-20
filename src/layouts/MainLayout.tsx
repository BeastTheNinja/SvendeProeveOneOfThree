import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import PanelNavbar from "../components/Navbar/PanelNavbar";
import logo from "../assets/logo/Logo.svg";
import Menu from "../assets/icons/bars-solid-full.svg";

function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="main-header">
        <img src={logo} alt="Logo" className="logo" />

        <button
          type="button"
          className="menu-button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img src={Menu} alt="" className="menu-icon" />
        </button>

        <PanelNavbar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;