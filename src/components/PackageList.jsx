import useFetch from "../services/useFetch";
import Spinner from "./shared/Spinner";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PackageDetails from "./PackageDetails";

export default function PackageList() {
  const BASE_URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const { data, loading, error } = useFetch(BASE_URL);
  if (error) throw error;
  if (loading || !data) return <Spinner />;

  const packages = data.map((item) => (
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
        <PackageDetails currentProduct={item} />
      </AccordionItemPanel>
    </AccordionItem>
  ));

  return <Accordion allowZeroExpanded>{packages}</Accordion>;
}
