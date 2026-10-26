import { useState } from "react";
import Logo from "../assets/logo-text.png";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <a href="#" className="shrink-0" onClick={closeMenu}>
          <img src={Logo} alt="Dev Stack" className="h-8 w-auto sm:h-9" />
        </a>

        <ul className="hidden items-center gap-5 text-sm font-medium text-gray-700 lg:flex xl:gap-7 xl:text-base">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  link.active
                    ? "text-[#D91B7E]"
                    : "transition-colors hover:text-[#D91B7E]"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="btn rounded-full">Sign In</button>
          <button className="btn btn-secondary rounded-full">Sign Up</button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white lg:hidden"
        >
          <ul className="container mx-auto flex flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 ${
                    link.active ? "text-[#D91B7E]" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container mx-auto flex flex-col gap-2 px-4 pb-4 sm:px-6">
            <button className="btn w-full rounded-full" onClick={closeMenu}>
              Sign In
            </button>
            <button
              className="btn btn-secondary w-full rounded-full"
              onClick={closeMenu}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
