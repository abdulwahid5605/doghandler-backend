import { Container } from "@mui/material";
import "./App.css";
import EmailComponent from "./Components/EmailComponent";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ minHeight: "400px" }}>
        <EmailComponent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
