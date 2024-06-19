import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Services" title="What We Offer"/>
        <Services />
        <About/>
        <Title subTitle="TESTIMONIALS" title="What Client Says"/>
        <Testimonials/>
        <Title subTitle="CONTACT US" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      
    </>
  );
};

export default App;
