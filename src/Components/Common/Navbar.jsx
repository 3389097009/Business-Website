import React from "react";
// import {FaInstagram} from 'react-icons/fa';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import "./Navbar.css";
import se_logo from "../../Assets/Images/sundeco_enterprises.jpg";

const Navbar = () => {
  const twitter = () => {
    console.log("twitter logo clicked");
  };

  return (
    <header>
      <img src={se_logo} className="se_logo" alt="sundeco_logo"></img>
      <nav>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>

        <button className="insta">
          <WhatsAppIcon onClick={twitter} />
        </button>
        <button className="mobile">
          <AddIcCallIcon onClick={twitter} />
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
