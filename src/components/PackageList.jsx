import useFetch from "../services/useFetch";
import Spinner from "./shared/Spinner";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PackageDetails from "./PackageDetails";

export default function PackageList() {
  const { data, loading, error } = useFetch(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );
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
      <PackageDetails currentProduct={item} />
    </AccordionItem>
  ));

  return <Accordion allowZeroExpanded>{packages}</Accordion>;
}
