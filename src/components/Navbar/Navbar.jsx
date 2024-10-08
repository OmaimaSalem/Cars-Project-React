import logo from "../../assets/images/logo.png"
import navbarStyles from "./Navbar.module.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#">
    <img src={logo} alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse  ms-5 justify-content-around w-100 ${navbarStyles.navList}`} id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.navLink}`}  to="#">Become a renter</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.navLink}`}  to="#">Rental deals</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.navLink}`}  to="#">How it work</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.navLink}`}  to="#">Why choose us</Link>
        </li>
        
      </ul>
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.login}`}  to="#">Sign in</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.register}`}  to="#">Sign up</Link>
        </li>
        </ul>
      
    </div>
  </div>
</nav>
  );
};

export default Navbar;
