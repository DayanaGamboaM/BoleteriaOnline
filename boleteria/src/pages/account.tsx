import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/componentsAccount/Hero";
import PersonalInformation from "../../components/componentsAccount/PersonalInformation";
const Home = () => {
  return (
    <Layout>
      <div className="container-layout">
        <Hero/>
        <PersonalInformation/>
      </div>
    </Layout>
  );
};

export default Home;
