import React from 'react'
import Layout from '../../components/Layout';
import Boarding from '../../components/componentsPaymentGateway/Boarding';
import NavBar from '../../components/NavBar';
import TravelDate from '../../components/componentsPaymentGateway/TravelDate';
import Hour from '../../components/componentsPaymentGateway/Hour';
const Home = ()=>{

    return(
        <>
            <NavBar/>
            <Boarding/>
            <TravelDate/>
            <Hour/>
        </>
    )
}

export default Home ; 