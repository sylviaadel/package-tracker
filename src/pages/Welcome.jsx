import { Link } from "react-router-dom";
import welcomeImg from "../assets/images/welcome-image.svg";
import welcomeImgDesktop from "../assets/images/welcome-img-desktop.png";

export default function Welcome() {
  return (
    <div id="Welcome">
      <picture>
        <source media="(min-width:860px)" srcset={welcomeImgDesktop} />
        <source media="(min-width:320px)" srcset={welcomeImg} />
        <img
          src={welcomeImg}
          alt="People putting closed packages beside a big truck."
        />
      </picture>
      <h1>
        With <span className="lightblue-color">InstaPacket</span>, you can
        easily and safely track your packages anytime.
      </h1>
      <Link to="/listing" className="primary-btn">
        Get Started
      </Link>
    </div>
  );
}
