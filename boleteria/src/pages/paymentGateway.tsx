import React from 'react'
import Layout from '../../components/Layout';
import Boarding from '../../components/componentsPaymentGateway/Boarding';
import NavBar from '../../components/NavBar';
import TravelDate from '../../components/componentsPaymentGateway/TravelDate';
const Home = ()=>{

    return(
        <>
            <NavBar/>
            <Boarding/>
            <TravelDate/>
        </>
    )
}

export default Home ; 