import "./Header.css";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSignInAlt } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { FcStumbleupon } from "react-icons/fc";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { RiArticleLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";


function Header() {
  let { logoutUser, userLoginStatus } = useContext(userLoginContext);

  return (
    
    <div className="d-flex flex-wrap justify-content-around header">
      <h1>
        {" "}
        !NDIA
      </h1>
      <ul className="nav fs-5 p-3">
        <li className="nav-item">
          <Link to="" className="nav-link text-dark">
            <FaHome className="fs-3 text dark" /> Home
          </Link>
        </li>
        <li>< Link to="blog" className="nav-link text-dark">
        <RiArticleLine className="fs-3 text-dark me-2 " />{" "}
            Blogs and Articles
          </Link></li>
        <li className="nav-item">
          <Link to="register" className="nav-link text-dark">
            <SiGnuprivacyguard className="fs-3 text-dark" />
            Register
          </Link>
        </li>
        {userLoginStatus === false ? (
          <li className="nav-item">
            <Link to="login" className="nav-link text-dark">
              <FaSignInAlt className="fs-3 text-dark me-2 " />
              Login
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="login" className="nav-link text-dark" onClick={logoutUser}>
              <FaSignInAlt className="fs-3 text-dark me-2 " />
              Logout
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="about" className="nav-link text-dark">
            <IoMdInformationCircle className="fs-3 text-dark me-2 " />{" "}
            Aboutus
          </Link>
         

        </li>
       
        <li>< Link to="profile" className="nav-link text-dark">
            <CgProfile className="fs-3 text-dark me-2 " />{" "}
            Profile
          </Link></li>
          
      </ul>
    </div>
  );
}

export default Header;
