import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Location() {
  return (
    <div id="Location">
      <h1>
        <FontAwesomeIcon icon={solid("box-archive")} />
        Package 1
      </h1>
      <div className="info-content">
        <h3>
          <FontAwesomeIcon icon={solid("location-dot")} />
          Pickup Location:
        </h3>
        <label>Onsgard</label>
      </div>
      <Link to={`/listing`} className="primary-btn">
        <FontAwesomeIcon icon={solid("chevron-left")} />
        Back to Packages
      </Link>
    </div>
  );
}
