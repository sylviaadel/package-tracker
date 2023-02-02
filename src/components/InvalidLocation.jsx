import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function NotFound() {
  return (
    <div className="error">
      <h1>
        <FontAwesomeIcon icon={solid("triangle-exclamation")} />
        <span>Invalid Package ID</span>
      </h1>
    </div>
  );
}
