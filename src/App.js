import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Tours from "./Components/Tours";
import Footer from "./Components/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}
export default App;
