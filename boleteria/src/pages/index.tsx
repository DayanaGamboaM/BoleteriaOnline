import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterInformation from "../../components/componentsIndex/FooterInformation";
import Hero from "../../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Boleteria Transporte UNA</title>
        <meta name="description" content="Boleteria Transporte UNA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div style={{ backgroundColor: "#d9d9d9" }}>
        <NavBar />
        <Hero />
        <Header />
        <FooterInformation />
        <Footer />
      </div>
    </>
  );
}
