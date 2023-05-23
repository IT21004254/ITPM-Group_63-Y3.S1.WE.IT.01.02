import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cloth from "./pages/Cloth";
import Food from "./pages/Food";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Medical from "./pages/Medical/medical";
import Stationery from "./pages/Stationery/Stationery";
import AddStationery from "./pages/Stationery/AddStationery";
import RequestsVolunteer from "./pages/Requests/Request";
import AdminLogin from './pages/AdminLogin/AdminLogin'
import AddReq from './pages/AddRequests/AddRequests'

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
          <Route path="/medical/requests" element={<RequestsVolunteer/>} />
          <Route path="/medical/addRequests" element={<AddReq />} />
          <Route path="/medical/adminLogin" element={<AdminLogin/>} />
          <Route path="/addStationery" element={<AddStationery />} />
          <Route path="/addStationery" element={<AddStationery />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
