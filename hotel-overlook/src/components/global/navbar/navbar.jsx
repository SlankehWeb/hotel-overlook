// Import the Link component from React Router for navigation
import { Link } from "react-router-dom";

// Import the styles for the navbar
import "./navbar.scss";

// Define the NavBar component
const NavBar = () => {
  return (
    <>
      {/* Header section */}
      <header>
        {/* Logo */}
        <img
          src={require("./e9b09fb84b0e7acabee9e331323da87a.png")}
          className="logo"
          alt="logo"
        />

        {/* Navigation toggle checkbox */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              {/* Use the Link component for internal navigation */}
              <Link to="/">FORSIDE</Link>
            </li>
            <li>
              <a href="/Hoteller">HOTELLER & DESTINATIONER</a>
            </li>
            <li>
              <a href="/Værelser">VÆRELSER</a>
            </li>
            <li>
              <a href="/Reservation">RESERVATION</a>
            </li>
            <li>
              <a href="/Login">LOGIN</a>
            </li>
          </ul>
        </nav>

        {/* Label for the navigation toggle */}
        <label
          htmlFor="nav-toggle"
          title="Show navbar"
          className="nav-toggle-label"
        >
          <span></span>
        </label>
      </header>
    </>
  );
};

// Export the NavBar component as the default export
export default NavBar;
