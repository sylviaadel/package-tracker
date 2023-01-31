import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationIcon } from "../js/LocationIcon";

export default function Map() {
  const position = [52.0404797, 76.9262526];

  return (
    <div id="Map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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
