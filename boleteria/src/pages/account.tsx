import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../public/bus-banner.jpg";
import Image from "next/image";
const Home = () => {
  return (
    <Layout>
      <div className="container-account">
        <div className="banner">
          <Image
            src={Banner}
            alt="Banner"
            placeholder="blur"
            width={1280}
            height={400}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;