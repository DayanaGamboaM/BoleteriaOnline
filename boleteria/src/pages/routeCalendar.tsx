import React from 'react'
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoutesC from '../../components/componentsRouteCalendar/RoutesC';
import Hero from '../../components/Hero';
import { RoutesProvider } from "@/contexts/RoutesContext";
import NavBar from "../../components/NavBar";

const RouteCalendar = () => {

    return (
        <RoutesProvider>
            <div className='bodyC'>
            <NavBar />
            <Hero />
            <Header />
            <RoutesC />
            <Footer />

        </div>
        </RoutesProvider>
        


    )
}

export default RouteCalendar; 