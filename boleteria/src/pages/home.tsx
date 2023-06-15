import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterInformation from "../../components/componentsIndex/FooterInformation";
import Hero from "../../components/Hero";

const HomePage = () => {
  return (
      <div style={{ backgroundColor: "#d9d9d9" }}>
      <NavBar  />
      <Hero />
      <Header />
      <FooterInformation />
      <Footer />
    </div>
    
  );
};

export default HomePage;