import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// Import specific icons from Font Awesome
import { faMagnifyingGlass, faCartShopping, faBell, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
    return (
      <div className="navbar">
        <div className="navbar__s1">
          <h1 className="navbar__s1__title">Udemy</h1>
        </div>
        <div className="navbar__s2">
          {/* FontAwesome icon for search */}
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#01060e" }} />
          <input placeholder="Search for anything here. Tech, business, Art..." />
        </div>
        <div className="navbar__s3">
          <p>Courses</p>
          <div className="navbar__s3__mylearning">
            <p>My learning</p>
            <div className="navbar__s3__mylearning__1">
              <p>You didn't purchase anything. Your cart is empty...</p>
            </div>
          </div>
          {/* FontAwesome icons for cart, bell, and user */}
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#01060e" }} />
          <FontAwesomeIcon icon={faBell} style={{ color: "#00040a" }} />
          <FontAwesomeIcon icon={faUser} style={{ color: "#00040a" }} />
        </div>
        <div className="navbar__s4">
          {/* FontAwesome icon for menu */}
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    );
  }

  export default Navbar