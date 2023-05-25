import React from 'react'
import Layout from '../../components/Layout';
import Carousel from '../../components/componentsMyTickets/Carousel';
import Hero from '../../components/componentsMyTickets/Hero';
const Home = ()=>{

    return(

        <Layout>
            <div>
                <Carousel/>
                <Hero/>
            </div>
        </Layout>
    )
}

export default Home ;