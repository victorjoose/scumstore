import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homeContainer.css";

import capaCDgif from "../../public/images/cdHomePage.gif";
import capaCDpng from "../../public/images/cdHomePage.png";
import onlineStoreButtongif from "../../public/images/online-store-button.gif";
import onlineStoreButtonhover from "../../public/images/online-store-button-hover.png";
import windowsXP from "../../public/images/windowsXP.png";
import atGif from "../../public/images/atGif.gif";
import cartGif from "../../public/images/carrinho.gif";

function HomeContainer() {
  const [storeButton, setStoreButton] = useState(onlineStoreButtongif);
  const [capaCDanim, setCapaCDanim] = useState(capaCDpng);

  return (
    <div className="content">
      <div className="section2">
        <img
          onMouseOver={() => setCapaCDanim(capaCDgif)}
          onMouseOut={() => setCapaCDanim(capaCDpng)}
          src={capaCDanim}
          alt=""
          id="capaCD"
        />
        <h3>Acesse a nossa</h3>
        <Link to={{ pathname: "/store" }}>
          <div className="OnlineStoreButton">
            <img
              src={storeButton}
              alt=""
              onMouseOver={() => setStoreButton(onlineStoreButtonhover)}
              onMouseOut={() => setStoreButton(onlineStoreButtongif)}
            />
          </div>
        </Link>
        <div className="icons">
          <img src={atGif} alt="" id="atGif" />
          <img src={cartGif} alt="" id="cartGif" />
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
