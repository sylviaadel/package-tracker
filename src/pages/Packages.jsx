import PackageList from "../components/PackageList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Packages() {
  return (
    <div id="Packages">
      {/* This is the correct way to add the icon inside the <h1> (check NotFound.jsx for the bad version) */}
      <h1>
        <FontAwesomeIcon icon={solid("list")} />
        Your Packages
      </h1>
      <PackageList />
    </div>
  );
}
