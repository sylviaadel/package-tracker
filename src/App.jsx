import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Welcome from "./pages/Welcome";
import Packages from "./pages/Packages";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";
import "./styles/style.scss";

// good
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
