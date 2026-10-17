import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/drinks" className={({ isActive }) => (isActive ? "active" : "")}>
            Drinks
          </NavLink>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle luxury dark mode"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;