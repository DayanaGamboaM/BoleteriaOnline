import React from 'react'
import Layout from '../../components/Layout';
import Carousel from '../../components/componentsQR/Carousel';
import Hero from '../../components/componentsQR/Hero';

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