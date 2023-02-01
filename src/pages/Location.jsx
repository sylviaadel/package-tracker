import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Map from "../components/Map";
import useFetch from "../services/useFetch";

export default function Location() {
  const BASE_URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const { data: packages, loading, error } = useFetch(BASE_URL);
  console.log(packages);
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
        <label>Fuller</label>
      </div>
      <Map />
      <Link to={`/packages`} className="primary-btn">
        <FontAwesomeIcon icon={solid("chevron-left")} />
        Back to Packages
      </Link>
    </div>
  );
}
