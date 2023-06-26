import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/componentsAccount/Header";
import PersonalInformation from "../../components/componentsAccount/PersonalInformation";
import SendEmail from "../../components/componentsAccount/SendEmail";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";


const Account = () => {
  return (
    <Layout>
      <div className="containerL">
        <Hero />
        <Header/>
        <PersonalInformation/>
        <SendEmail/>
        <Footer/>
      </div>
    </Layout>
  );
};

export default Account;
