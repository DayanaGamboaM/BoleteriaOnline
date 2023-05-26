import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/componentsAccount/Hero";
import PersonalInformation from "../../components/componentsAccount/PersonalInformation";
import SendEmail from "../../components/componentsAccount/SendEmail";
import SaveButton from "../../components/componentsAccount/SaveButton";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <Layout>
      <div className="containerL">
        <Hero/>
        <PersonalInformation/>
        <SendEmail/>
        <SaveButton/>
        <Footer/>
      </div>
    </Layout>
  );
};

export default Home;
