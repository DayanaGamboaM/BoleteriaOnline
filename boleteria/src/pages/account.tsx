import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/componentsAccount/Header";
import PersonalInformation from "../../components/componentsAccount/PersonalInformation";
import SendEmail from "../../components/componentsAccount/SendEmail";
import SaveButton from "../../components/componentsAccount/SaveButton";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";


const Home = () => {
  return (
    <Layout>
      <div className="containerL">
        <Hero />
        <Header/>
        <PersonalInformation/>
        <SendEmail/>
        <SaveButton/>
        <Footer/>
      </div>
    </Layout>
  );
};

export default Home;
