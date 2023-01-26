import PackageList from "../components/PackageList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Listing() {
  return (
    <div id="Listing">
      <h1>
        <FontAwesomeIcon icon={solid("list")} />
        Your Packages
      </h1>
      <PackageList />
    </div>
  );
}
