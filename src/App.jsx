import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Welcome from "./pages/Welcome";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}
