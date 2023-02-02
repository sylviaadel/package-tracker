import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Map from "../components/Map";
import InvalidLocation from "../components/InvalidLocation";

export default function Location() {
  let { id } = useParams();
  var localStorageItems = JSON.parse(localStorage.getItem("MyPackages"));
  let currentPackage = localStorageItems.find((p) => p.id == id);
  if (currentPackage == null) {
    return <InvalidLocation />;
  }
  return (
    <div id="Location">
      <h1>
        <FontAwesomeIcon icon={solid("box-archive")} />
        {currentPackage.sender}
      </h1>
      <div className="info-content">
        <h3>
          <FontAwesomeIcon icon={solid("location-dot")} />
          Pickup Location:
        </h3>
        <label>{currentPackage.location_name}</label>
      </div>
      <Map currentPackage={currentPackage} />
      <Link to={`/packages`} className="primary-btn">
        <FontAwesomeIcon icon={solid("chevron-left")} />
        Back to Packages
      </Link>
    </div>
  );
}
