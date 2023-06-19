import React from "react";
import "./Navbar.style.css";
import Profile from "../Profile/Profile";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-cont">
        <div className="detail-div">
          <h3 className="bal">My balance</h3>
          <h2 className="amount">{`$5000`}</h2>
        </div>
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
