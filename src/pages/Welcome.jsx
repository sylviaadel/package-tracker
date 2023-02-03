import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Welcome() {
  return (
    <div id="Welcome">
      <h1>Welcome CARL</h1>
      <span>
        With InstaPacket, you can easily and safely track your packages anytime
        and from anywhere
      </span>
      <Link to="/packages" className="primary-btn">
        Get Started
        <FontAwesomeIcon icon={solid("chevron-right")} />
      </Link>
    </div>
  );
}
