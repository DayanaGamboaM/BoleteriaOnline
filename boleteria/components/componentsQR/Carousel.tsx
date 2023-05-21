import React from 'react'
import Banner from "../banner-bus-1.jpg"
import Image from "next/image";

const Carousel = () => {
  return (
    <div>
      <Image className='ImgContainer' src={Banner} alt="Banner" width={1366} height={250}/>
    </div>
  )
}

export default Carousel;