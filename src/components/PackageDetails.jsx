import { Link } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { customizeText } from "../helpers/PackageDetails";

labels: {
  delivery: {
    title: "Estimate Time of Delivery"
    icon: "wifi"
  },
  status: {
    title: "Status",
    icon: "wifi",
  }
}

// You where doing so go until this part...
export default function PackageDetails(props) {
  // Properties
  const deliverCSS = currentProduct.status === "delivered" ? "greenColor" : "";

  return (
    <>
      <header className="info-content">
        <h3>
          <FontAwesomeIcon icon={solid("signal")} />
          Status
        </h3>
        <label className={deliverCSS}>
          {customizeText(props.currentProduct.status)}
        </label>
      </header>
      <InfoContent title="Status" icon="wifi" text="Delivered" />
      <InfoContent title="Estimated Time of De" icon="wifi" text="Delivered" />
      {currentProduct.notes !== null && (
        <InfoContent title={labels.delivery.title} icon={lav} text="Delivered"/>
      )}
      <Link to={`/packages/${props.currentProduct.id}`} className="track-link">
        Track Package
        <FontAwesomeIcon icon={solid("chevron-right")} />
      </Link>
    </>
  );
}
