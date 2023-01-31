import { Link } from "react-router-dom";
import welcomeImg from "../assets/images/welcome-image.svg";
import welcomeImgDesktop from "../assets/images/welcome-img-desktop.png";

export default function Welcome() {
  return (
    <div id="Welcome">
      <h1>Welcome Carl</h1>
      <span>
        With InstaPacket, you can easily and safely track your packages anytime
        and from anywhere
      </span>
      <Link to="/packages" className="primary-btn">
        Get Started
      </Link>
    </div>
  );
}
