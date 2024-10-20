import "./Header.css";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoMdInformationCircle } from "react-icons/io";
import { RiArticleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";

function Header() {
  let { logoutUser, userLoginStatus } = useContext(userLoginContext);

  return (
    <headerr className="header ">
      <div className="container st d-flex align-items-center justify-content-between">
        <h1 className="header-title">!NDIA</h1>
        <nav className="nav">
          <ul className="d-flex align-items-center">
            <li className="nav-item">
              <Link to="" className="nav-link text-dark">
                <FaHome className="icon" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="blog" className="nav-link text-dark">
                <RiArticleLine className="icon" /> Blogs and Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="register" className="nav-link text-dark">
                <SiGnuprivacyguard className="icon" /> Register
              </Link>
            </li>
            {userLoginStatus === false ? (
              <li className="nav-item">
                <Link to="login" className="nav-link text-dark">
                  <FaSignInAlt className="icon" /> Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="login" className="nav-link text-dark" onClick={logoutUser}>
                  <FaSignInAlt className="icon" /> Logout
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="about" className="nav-link text-dark">
                <IoMdInformationCircle className="icon" /> About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="profile" className="nav-link text-dark">
                <CgProfile className="icon" /> Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </headerr>
  );
}

export default Header;
