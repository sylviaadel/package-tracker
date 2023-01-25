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

export default function PackageListing() {
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
          </h2>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
          ut occaecat consequat est minim minim esse tempor laborum consequat
          esse adipisicing eu reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  ));

  return <Accordion allowZeroExpanded>{packages}</Accordion>;
}
