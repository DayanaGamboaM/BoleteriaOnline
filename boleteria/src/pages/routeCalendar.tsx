import React from 'react'
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoutesC from '../../components/componentsRouteCalendar/RoutesC';
import Hero from '../../components/Hero';
import { RoutesProvider } from "@/contexts/RoutesContext";

const RouteCalendar = ()=>{

    return(

        <Layout>
            <RoutesProvider>
            <div className='bodyC'>
                <Hero />
                <Header />
                <RoutesC />
                <Footer />

           </div>
            </RoutesProvider>
           
        </Layout>
    )
}

export default RouteCalendar ; 