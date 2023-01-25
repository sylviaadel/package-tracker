import { useState } from "react";
import { Link } from "react-router-dom";
import UserInfoDropDown from "./UserInfoDropdown";
import mainLogo from "../../assets/images/main-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);

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
      <FontAwesomeIcon
        onClick={() => setToggle(!toggle)}
        icon={solid("circle-user")}
      />
      {toggle && <UserInfoDropDown />}
    </nav>
  );
}
