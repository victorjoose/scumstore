import React, { useState } from "react";
import fbHover from "../../public/images/socialMediaIcons/fb-hover.svg";
import igHover from "../../public/images/socialMediaIcons/ig-hover.svg";
import spHover from "../../public/images/socialMediaIcons/sp-hover.svg";
import ytHover from "../../public/images/socialMediaIcons/yt-hover.svg";
import fb from "../../public/images/socialMediaIcons/fb.svg";
import ig from "../../public/images/socialMediaIcons/ig.svg";
import sp from "../../public/images/socialMediaIcons/sp.svg";
import yt from "../../public/images/socialMediaIcons/yt.svg";
import "./socialMediaIcons.css";

function SocialMediaIcons() {
  const [igSrc, setIgSrc] = useState(ig);
  const [fbSrc, setFbSrc] = useState(fb);
  const [spSrc, setSpSrc] = useState(sp);
  const [ytSrc, setYtSrc] = useState(yt);

  return (
    <div className="social-media-icons">
      <div className="social-media-icons-container">
        <a
          href={"https://facebook.com/thescumbags"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={() => setFbSrc(fbHover)}
            onMouseOut={() => setFbSrc(fb)}
            src={fbSrc}
            alt=""
          ></img>
        </a>
        <a
          href={"https://instagram.com/scumbags.br"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={() => setIgSrc(igHover)}
            onMouseOut={() => setIgSrc(ig)}
            src={igSrc}
            alt=""
          ></img>
        </a>
        <a
          href={"https://www.youtube.com/channel/UC-bImr91y27m2lYhWwKEdRw"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={() => setYtSrc(ytHover)}
            onMouseOut={() => setYtSrc(yt)}
            src={ytSrc}
            alt=""
          ></img>
        </a>
        <a
          href={"https://open.spotify.com/artist/4h2cZ1HMMIMuBIHR1Uke0q"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={() => setSpSrc(spHover)}
            onMouseOut={() => setSpSrc(sp)}
            src={spSrc}
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
