import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/componentsAccount/Hero";
import PersonalInformation from "../../components/componentsAccount/PersonalInformation";
import SendEmail from "../../components/componentsAccount/SendEmail";

const Home = () => {
  return (
    <Layout>
      <div className="container-layout">
        <Hero/>
        <PersonalInformation/>
        <SendEmail/>
      </div>
    </Layout>
  );
};

export default Home;
