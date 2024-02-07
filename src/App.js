import { Box, Container } from "@mui/material";
import "./App.css";
import Hero from "./Components/Home/Hero";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCard from "./Components/Home/Card";

function App() {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter> */}
      <Hero />
      <CustomCard />
      <Footer />
    </>
  );
}

export default App;
