import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../public/bus-banner.jpg";
import UserProfile from "../../public/usuario.png";
import Image from "next/image";
import UserPhoto from "../../components/componentsAccount/UserPhoto";
import BodyAccount from "../../components/componentsAccount/BodyAccount";
const Home = () => {
  return (
    <Layout>
      <div>
        <UserPhoto/>
        <BodyAccount/>
      </div>
    </Layout>
  );
};

export default Home;
