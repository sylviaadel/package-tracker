import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationIcon } from "../helpers/LocationIcon";

export default function Map(props) {
  const position = [
    props.currentPackage.location_coordinate_latitude,
    props.currentPackage.location_coordinate_longitude,
  ];

  return (
    <div id="Map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={LocationIcon}>
          <Popup>{props.currentPackage.location_name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
