import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";
import Contact from "./components/contact/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom';
import Footer from "./footer/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (

    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Contact /> 
      {/* <Footer /> */}
    </>
  );
}

export default App;
