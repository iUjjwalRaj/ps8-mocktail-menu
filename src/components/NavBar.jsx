import { NavLink } from "react-router-dom";

function NavBar() {
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
      </ul>
    </nav>
  );
}

export default NavBar;