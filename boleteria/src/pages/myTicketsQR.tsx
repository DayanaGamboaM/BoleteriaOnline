import React from 'react'
import Layout from '../../components/Layout';
import Carousel from '../../components/componentsQR/Carousel';
import Hero from '../../components/componentsQR/Hero';
import QR from '../../components/componentsQR/QR';

const Home = ()=>{

    return(

        <Layout>
            <div className='LayoutContainer'>
                <Carousel/>
                <Hero/>
                <QR/>
            </div>
        </Layout>

    )
}

export default Home ;