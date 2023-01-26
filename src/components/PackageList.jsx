import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Listing() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const packages = user.map((userObj) => (
    <AccordionItem key={userObj.id}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h2>
            <FontAwesomeIcon icon={solid("box-archive")} />
            {userObj.sender} <span>({userObj.parcel_id})</span>
            {userObj.verification_required === true && (
              <div className="needs-verification">
                <FontAwesomeIcon icon={solid("circle-exclamation")} />
                Needs Verification
              </div>
            )}
          </h2>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel></AccordionItemPanel>
    </AccordionItem>
  ));

  return <Accordion allowZeroExpanded>{packages}</Accordion>;
}
