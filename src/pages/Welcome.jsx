import { Link } from "react-router-dom";
import welcomeImg from "../assets/images/welcome-image.svg";

export default function Welcome() {
  return (
    <div id="Welcome">
      <img
        src={welcomeImg}
        alt="People putting closed packages beside a big truck."
      />
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
