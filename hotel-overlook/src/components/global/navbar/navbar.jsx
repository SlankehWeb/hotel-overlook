import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
          <header>
  <h1 className="logo"><a href="/">HOTEL OVERLOOK</a></h1>
  <input type="checkbox" id="nav-toggle" className="nav-toggle" />
  <nav>
    <ul>
    <li><Link to="/" className="NavBar-li-link">FORSIDE</Link></li>
      <li><a href="/Hoteller">HOTELLER & DESTINATIONER</a></li>
      <li><a href="/Værelser">VÆRELSER</a></li>
      <li><a href="/Reservation">RESERVATION</a></li>
      <li><a href="/Login">LOGIN</a></li>
    </ul>
  </nav>
  <label htmlFor="nav-toggle" title="Show navbar" className="nav-toggle-label">
    <span></span>
  </label>
</header>
        </>
    )
}

export default NavBar;