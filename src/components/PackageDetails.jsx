import { Link } from "react-router-dom";
import { AccordionItemPanel } from "react-accessible-accordion";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function PackageDetails(props) {
  function customizeText(text) {
    text = text.replaceAll("-", " ");
    return text;
  }
  return (
    <AccordionItemPanel>
      <div className="info-content">
        <h3>
          <FontAwesomeIcon icon={solid("signal")} />
          Status
        </h3>
        <label
          className={
            props.currentProduct.status === "delivered" ? "greenColor" : ""
          }
        >
          {customizeText(props.currentProduct.status)}
        </label>
      </div>
      <div className="info-content">
        <h3>
          <FontAwesomeIcon icon={solid("calendar")} />
          Estimated Delivery Time
        </h3>
        <label>{moment(props.currentProduct.eta).format("llll")}</label>
      </div>
      <div className="info-content">
        <h3>
          <FontAwesomeIcon icon={solid("calendar")} />
          Last Updated
        </h3>
        <label>
          {moment(props.currentProduct.last_updated).format("llll")}
        </label>
      </div>
      {props.currentProduct.notes !== null && (
        <div className="info-content">
          <h3>
            <FontAwesomeIcon icon={solid("message")} />
            Notes
          </h3>
          <label>{props.currentProduct.notes}.</label>
        </div>
      )}
      <Link to={`/packages/${props.currentProduct.id}`} className="track-link">
        Track Package
        <FontAwesomeIcon icon={solid("chevron-right")} />
      </Link>
    </AccordionItemPanel>
  );
}
