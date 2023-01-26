import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Listing() {
  const [packageList, setPackageList] = useState([]);

  const fetchData = () => {
    return fetch("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840")
      .then((response) => response.json())
      .then((data) => setPackageList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const packages = packageList.map((item) => (
    <AccordionItem key={item.id}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h2>
            <FontAwesomeIcon icon={solid("box-archive")} />
            {item.sender} <span>({item.parcel_id})</span>
            {item.verification_required === true && (
              <div className="needs-verification">
                <FontAwesomeIcon icon={solid("circle-exclamation")} />
                Needs Verification
              </div>
            )}
          </h2>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="info-content">
          <h3>
            <FontAwesomeIcon icon={solid("signal")} />
            Status:
          </h3>
          <label className={item.status === "delivered" ? "greenColor" : ""}>
            {item.status}
          </label>
        </div>
        <div className="info-content">
          <h3>
            <FontAwesomeIcon icon={solid("calendar")} />
            Estimated Time of Delivery:
          </h3>
          <label>{item.eta}</label>
        </div>
        <div className="info-content">
          <h3>
            <FontAwesomeIcon icon={solid("location-dot")} />
            Pickup Location:
          </h3>
          <label>{item.location_name}</label>
        </div>
        <div className="info-content">
          <h3>
            <FontAwesomeIcon icon={solid("calendar")} />
            Last Updated:
          </h3>
          <label>{item.last_updated}</label>
        </div>
        {item.notes !== null && (
          <div className="info-content">
            <h3>
              <FontAwesomeIcon icon={solid("message")} />
              Notes:
            </h3>
            <label>{item.notes}.</label>
          </div>
        )}
        <Link to={`/listing/${item.id}`} className="track-link">
          Track Package
          <FontAwesomeIcon icon={solid("chevron-right")} />
        </Link>
      </AccordionItemPanel>
    </AccordionItem>
  ));

  return <Accordion allowZeroExpanded>{packages}</Accordion>;
}
