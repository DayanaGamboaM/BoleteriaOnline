import React from 'react'
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoutesC from '../../components/componentsRouteCalendar/RoutesC';
import Hero from '../../components/Hero';
const Home = ()=>{

    return(

        <Layout>
           <div className='bodyC'>
                <Hero />
                <Header />
                <RoutesC />
                <Footer />

           </div>
           
        </Layout>
    )
}

export default Home ; 