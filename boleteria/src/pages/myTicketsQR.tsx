import React from 'react'
import Layout from '../../components/Layout';
import QR from '../../components/componentsQR/QR';
import Information from '../../components/componentsQR/Information';
import Footer from '../../components/Footer';
import Header from '../../components/componentsQR/Header';
import Hero from '../../components/Hero';


const MyTicketsQR = ()=>{

    return(

        <Layout>
            <div className='LayoutContainer'>
                <Hero />
                <Header/>
                <QR qrValue="" />
                <Information/>
                <Footer/>
            </div>
        </Layout>

    )
}

export default MyTicketsQR ;