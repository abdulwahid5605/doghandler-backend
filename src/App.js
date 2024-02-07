import { Box, Container } from "@mui/material";
import "./App.css";
import EmailComponent from "./Components/EmailComponent";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/navbar";
import OfferComponenet from "./Components/OfferComponenet";

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "400px" }}>
        <EmailComponent />
        <OfferComponenet />
      </Box>
      <Footer />
    </>
  );
}

export default App;
