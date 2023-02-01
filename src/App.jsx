import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Welcome from "./pages/Welcome";
import Packages from "./pages/Packages";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
