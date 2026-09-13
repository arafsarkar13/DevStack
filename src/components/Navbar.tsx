import { useState } from "react";
import logo from "../assets/logo.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  // Controls whether the mobile menu (links) is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left: hamburger (mobile only) + Brand logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="btn btn-ghost btn-square md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <img src={logo} alt="Dev Stack logo" className="h-8 w-auto" />
        </div>

        {/* Center: nav links (desktop only) */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {NAV_LINKS.map((link) => {
            // "Home" is styled as the active link. Everything else is plain.
            const isActive = link === "Home";
            return (
              <li key={link}>
                <a
                  href="#"
                  className={isActive ? "text-pink-600" : "hover:text-gray-900"}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: Sign In / Sign Up */}
        <div className="flex items-center gap-3">
          <button type="button" className="btn btn-ghost hidden text-sm font-medium sm:inline-flex">
            Sign In
          </button>
          <button
            type="button"
            className="bg-brand-gradient btn rounded-full border-none px-5 text-sm font-semibold text-white hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown links */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 py-3 text-sm font-medium text-gray-600 md:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = link === "Home";
            return (
              <li key={link}>
                <a
                  href="#"
                  className={
                    isActive
                      ? "block rounded-lg bg-pink-50 px-3 py-2 text-pink-600"
                      : "block rounded-lg px-3 py-2 hover:bg-gray-50"
                  }
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
