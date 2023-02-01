import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationIcon } from "../helpers/LocationIcon";

export default function Map() {
  const position = [51.7181762, 17.7257496];

  return (
    <div id="Map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={LocationIcon}>
          <Popup>Fuller</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
