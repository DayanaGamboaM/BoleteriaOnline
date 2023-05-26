import React from 'react'
import Layout from '../../components/Layout';
import Carousel from '../../components/componentsMyTickets/Carousel';
import Hero from '../../components/componentsMyTickets/Hero';
import Tickets from '../../components/componentsMyTickets/Tickets';
import Footer from '../../components/componentsQR/Footer';
const Home = ()=>{

    return(

        <Layout>
            <div className='LayoutContainer'>
                <Carousel/>
                <Hero/>
                <Tickets/>
                <Footer/>
            </div>
        </Layout>
    )
}

export default Home ;