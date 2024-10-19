import "./UserProfile.css";
import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { Link, Outlet } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { TbUserEdit } from "react-icons/tb";

function UserProfile() {
  let { currentUser } = useContext(userLoginContext);
  let navigate = useNavigate();

  function onEditUser() {
    navigate("../edit-user");
  }

  if (!currentUser) {
    return <p>Loading...</p>; // Add a loading state or redirect if necessary
  }

  return (
    <div className="dd">
      <div className="text-center  p-3 ">
        {currentUser.profileImage && (
          <img
            src={currentUser.profileImage}
            width="75px"
            alt="User Profile"
            className="rounded-circle"
          />
        )}
        <p className="fs-3 ml-5">
          {currentUser.username}
          <TbUserEdit className="text-dark fs-4" onClick={onEditUser} />
        </p>
      </div>

     
      <ul className="nav fs-5 p-3 justify-content-around my-2 mb-5">
        <li className="nav-item ff">
          <Link to="products" className="nav-link text-light">
            <AiFillProduct className="fs-3 text-light" /> Famous Places
          </Link>
        </li>
        <li className="nav-item ff">
          <Link to="cart" className="nav-link text-light">
            <BiLike className="fs-3 text-light" /> Favorite places
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default UserProfile;