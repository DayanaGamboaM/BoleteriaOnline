import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Boleteria Transporte UNA</title>
        <meta name="description" content="Boleteria Transporte UNA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <NavBar />
      <Header />
    </>
  )
}
