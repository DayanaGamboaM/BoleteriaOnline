import React from 'react'
import Banner from "../banner-bus-1.jpg"
import Image from "next/image";

const Carousel = () => {
  return (
    <div className='CarouselContainer'>
      <Image className='ImgContainer' src={Banner} alt="Banner" width={1366} height={350}/>
    </div>
  )
}

export default Carousel;