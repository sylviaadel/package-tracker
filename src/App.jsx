import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Welcome from "./pages/Welcome";
import Listing from "./pages/Listing";
import Location from "./pages/Location";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<Location />} />
      </Routes>
    </div>
  );
}
