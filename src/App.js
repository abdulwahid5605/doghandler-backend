import { Box, Container } from "@mui/material";
import "./App.css";
import Hero from "./Components/Home/Hero";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCard from "./Components/Home/Card";
import Location from "./Components/Home/Location";
import SecurityServices from "./Components/Home/SecurityServices";
import OrganizationHero from "./Components/Organization/OrganizationHero";
import OrganizationBox from "./Components/Organization/OrganizationBox";
import Organization from "./Pages/Organization";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
