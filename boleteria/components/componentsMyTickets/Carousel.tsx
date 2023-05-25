import React from 'react'
import Image from 'next/image'
import Banner from "../../public/Banner-bus-figma.jpeg"

const Carousel = () => {
  return (
    <div className='CarouselContainer'>
        <Image className='ImgContainer' src={Banner} alt="Banner" width={1366} height={350}/>
    </div>
  )
}

export default Carousel