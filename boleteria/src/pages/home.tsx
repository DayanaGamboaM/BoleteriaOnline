import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterInformation from "../../components/componentsIndex/FooterInformation";
import Hero from "../../components/Hero";
import { RoutesProvider } from "@/contexts/RoutesContext";

const HomePage = () => {
  return (
    <RoutesProvider>
      <div style={{ backgroundColor: "#d9d9d9" }}>
      <NavBar  />
      <Hero />
      <Header />
      <FooterInformation />
      <Footer />
    </div>
    </RoutesProvider>
    
  );
};

export default HomePage;