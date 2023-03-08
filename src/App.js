import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cloth from "./pages/Cloth";
import Food from "./pages/Food";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Medical from "./pages/Medical";
import Stationery from "./pages/Stationery/Stationery";
import AddStationery from "./pages/Stationery/AddStationery";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/food" element={<Food />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/addStationery" element={<AddStationery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
