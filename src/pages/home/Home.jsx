import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import capaCDgif from "../../../public/images/cdHomePage.gif";
import capaCDpng from "../../../public/images/cdHomePage.png";
import windowsXP from "../../../public/images/windowsXP.png";
import onlineStoreButtongif from "../../../public/images/online-store-button.gif";
import onlineStoreButtonhover from "../../../public/images/online-store-button-hover.png";
import logo from "../../../public/images/logo.png";
import atGif from "../../../public/images/atGif.gif";
import cartGif from "../../../public/images/carrinho.gif";

import SocialMediaIcons from "../../components/socialMediaIcons/SocialMediaIcons";
import Footer from "../../components/footer/Footer";
import HomeContainer from "../../components/homeContainer/HomeContainer";

function Home() {
  const [storeButton, setStoreButton] = useState(onlineStoreButtongif);
  const [capaCDanim, setCapaCDanim] = useState(capaCDpng);

  return (
    <div id="home">
      <div className="header">
        <img className="logo-style" src={logo} alt="" />
      </div>
      <HomeContainer />
      <SocialMediaIcons />
      <Footer />
    </div>
  );
}

export default Home;
