import React, { useEffect } from "react";
import footerStreet from "../../public/images/footerStreet.png";
import skate from "../../public/images/skate.svg";
import skategif from "../../public/images/skate.gif";
import SocialMediaIcons from "../socialMediaIcons/SocialMediaIcons";
import "./footer.css"; // import CSS file

const Footer = () => {
  useEffect(() => {}, []);

  return (
    <div className="footer-container">
      <div className="footer-image-container">
        <div className="footer-image">
          <img src={footerStreet} alt="footer street"></img>
        </div>
        <div className="footer-gif">
          <marquee direction="right" scrollamount="30">
            <img src={skategif} alt="skate gif"></img>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Footer;
