import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <>
      <header>
        <img
          src={require("./e9b09fb84b0e7acabee9e331323da87a.png")}
          className="logo"
          alt="logo"
        />
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
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

export default NavBar;
