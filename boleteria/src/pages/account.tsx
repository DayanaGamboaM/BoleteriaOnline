import React from "react";
import Layout from "../../components/Layout";
import BodyAccount from "../../components/componentsAccount/BodyAccount";
import Hero from "../../components/componentsAccount/Hero";
const Home = () => {
  return (
    <Layout>
      <div>
        <Hero/>
        <BodyAccount/>
      </div>
    </Layout>
  );
};

export default Home;
