import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/componentsMyTickets/Header";
import Tickets from "../../components/componentsMyTickets/Tickets";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
const MyTickets = () => {
  return (
    <Layout>
      <div className="LayoutContainer">
        <Hero />
        <Header />
        <Tickets />
        <Footer/>
      </div>
    </Layout>
  );
};

export default MyTickets;
