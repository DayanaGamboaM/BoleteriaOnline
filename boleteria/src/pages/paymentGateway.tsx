import React from 'react'
import Layout from '../../components/Layout';
import Boarding from '../../components/componentsPaymentGateway/Boarding';
import TravelDate from '../../components/componentsPaymentGateway/TravelDate';
import Hour from '../../components/componentsPaymentGateway/Hour';
import Seats from '../../components/componentsPaymentGateway/Seats';
import InfoTravel from '../../components/componentsPaymentGateway/InfoTravel';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
const Home = () => {

    return (
        <>
            <NavBar />
            <div className="container" style={{ marginBottom: '20px' }}>
                <div className="flex-container">
                    <div className="flex-item">
                        <Boarding/>
                        <TravelDate/>
                        <Hour />
                        <Seats />

                    </div>
                    <div className="flex-item">
                        <InfoTravel />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home; 