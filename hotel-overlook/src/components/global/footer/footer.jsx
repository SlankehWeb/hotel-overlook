import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import "./footer.scss";

const GFooter = () => {
  return (
    <>
      <footer>
        <div className="parent">
          <div className="footer-colume-1">
            <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
          </div>
          <div className="footer-colume-2">
            <FaFacebookSquare size={"2em"}/>
            <FaTwitterSquare size={"2em"}/>
          </div>
          <div className="footer-colume-3">
            <ul>
              <li>
                <Link to="/">Forside</Link>
              </li>
              <li>
                <a href="/Hoteller">Hoteller & Destinationer</a>
              </li>
              <li>
                <a href="/Værelser">Værelser</a>
              </li>
              <li>
                <a href="/Reservation">Reservation</a>
              </li>
              <li>
                <a href="/Login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GFooter;
