import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./layout/Navbar/Footer/Footer";
import Navbar from "./layout/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
