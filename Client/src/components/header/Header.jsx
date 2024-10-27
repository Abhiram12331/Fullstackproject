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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
  <a class="navbar-brand" href="#"><h1 className="header-title">!NDIA</h1></a>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse cc" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to="" className="nav-link text-dark">
                <FaHome className="icon" /> Home
              </Link></a>
      </li>
      <li class="nav-item">
      <Link to="blog" className="nav-link text-dark mt-2">
                <RiArticleLine className="icon" /> Blogs and Articles
              </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="register" className="nav-link text-dark">
                <SiGnuprivacyguard className="icon" /> Register
              </Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{userLoginStatus === false ? (
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
            )}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="about" className="nav-link text-dark">
                <IoMdInformationCircle className="icon" /> About us
              </Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="profile" className="nav-link text-dark">
                <CgProfile className="icon" /> Profile
              </Link></a>
      </li>
      
    </ul>
  </div>
  </div>
</nav>
    </headerr>
  );
}

export default Header;
