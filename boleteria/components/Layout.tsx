import React  from "react";
import Head from "next/head";
import NavBar from "./NavBar";

type Props = {
    children: JSX.Element
  };

const Layout   = ({ children  }:Props) => {
  return (
    <>
      <Head>
        <title>Boleteria Transporte UNA</title>
        <meta name="description" content="Boleteria Transporte UNA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <NavBar />
      {children}
    </>
  );
};
export default Layout;