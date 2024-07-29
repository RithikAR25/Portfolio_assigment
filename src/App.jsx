import Banner from "./Pages/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Pages/Section1";
import Section_Contact from "./Pages/Section_Contact";
import Section_Project from "./Pages/Section_Project";
import Section_Skills from "./Pages/Section_Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_Footer from "./Components/Footer/Main_Footer";



function App() {
  return (
  <>
          <Router>
          <Banner/>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Section1/>} />
          <Route path="/skills" element={<Section_Skills/>} />
          <Route path="/Project" element={<Section_Project/>} />
          <Route path="/Contact" element={ <Section_Contact/>} />
        </Routes>
        <Footer/>
        <Main_Footer/>
      </Router>


  {/*
  <Banner/>
  <Navbar/>
  <Section1/>
  <Section_Skills/>
  <Section_Project/>
  <Section_Contact/>
  <Footer/> */}
  </>);
}






export default App;
