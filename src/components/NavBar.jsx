import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled || menuOpen ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero" onClick={closeMenu}>
          Ashen Fernando
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="contact-btn group hidden sm:flex" onClick={closeMenu}>
            <div className="inner">
              <span>Contact Me</span>
            </div>
          </a>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center size-11 rounded-lg border border-white/10 bg-black/40 text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 px-6 py-8">
          <ul className="flex flex-col gap-6 text-lg">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  className="block text-white-50 hover:text-white py-1"
                  onClick={closeMenu}
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full rounded-lg bg-white text-black font-semibold py-3"
                onClick={closeMenu}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
