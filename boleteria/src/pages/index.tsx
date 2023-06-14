import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { auth } from "../../src/fireBase/app";
import { onAuthStateChanged, User } from "firebase/auth";
import HomePage from "./home";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (usuario) {
      router.push("/");
    }
  }, [usuario]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Head>
        <title>Boleteria Transporte UNA</title>
        <meta name="description" content="Boleteria Transporte UNA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {!usuario ? <HomePage /> : <Login />}
    </>
  );
}
