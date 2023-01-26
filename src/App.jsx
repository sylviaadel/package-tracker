import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Listing from "./pages/Listing";
import Welcome from "./pages/Welcome";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
  );
}
