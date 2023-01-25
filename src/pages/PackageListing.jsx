import PackageItem from "../components/PackageItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function PackageListing() {
  return (
    <div id="Listing">
      <h1>
        <FontAwesomeIcon icon={solid("list")} />
        Your Packages
      </h1>
      <PackageItem />
    </div>
  );
}
