// Import necessary modules and components
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import { FaFacebookSquare } from "react-icons/fa"; // Import FaFacebookSquare icon from react-icons
import { FaTwitterSquare } from "react-icons/fa"; // Import FaTwitterSquare icon from react-icons
import "./footer.scss"; // Import styles

// Define the GFooter component
const GFooter = () => {
  return (
    <>
      {/* Footer section */}
      <footer>
        <div className="parent"> {/* A parent container */}
          <div className="footer-colume-1"> {/* First column */}
            <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p> {/* Copyright text */}
          </div>
          <div className="footer-colume-2"> {/* Second column */}
            <FaFacebookSquare size={"2em"}/> {/* Facebook icon */}
            <FaTwitterSquare size={"2em"}/> {/* Twitter icon */}
          </div>
          <div className="footer-colume-3"> {/* Third column */}
            <ul> {/* Unordered list */}
              <li>
                <Link to="/">Forside</Link> {/* Link to the home page */}
              </li>
              <li>
                <a href="/Hoteller">Hoteller & Destinationer</a> {/* Link to Hotels & Destinations */}
              </li>
              <li>
                <a href="/Værelser">Værelser</a> {/* Link to Rooms */}
              </li>
              <li>
                <a href="/Reservation">Reservation</a> {/* Link to Reservations */}
              </li>
              <li>
                <a href="/Login">Login</a> {/* Link to Login */}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GFooter; // Export the GFooter component
