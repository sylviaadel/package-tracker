import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navbar() {
  return (
    <nav id="Navbar">
      <Link to="/">
        <img
          src={mainLogo}
          alt="A package along with a map marker."
          className="mainLogo"
        />
        <label>InstaPacket</label>
      </Link>
      <FontAwesomeIcon icon={solid("circle-user")} />
    </nav>
  );
}
