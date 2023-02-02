import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function NotFound() {
  let location = useLocation();

  return (
    <div className="error">
      <h1>
        <FontAwesomeIcon icon={solid("triangle-exclamation")} />
        <span>Resourse not found at {location.pathname}</span>
      </h1>
    </div>
  );
}
