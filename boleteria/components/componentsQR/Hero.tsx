import React from 'react'
import Banner from "../banner-bus-1.jpg"
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Image src={Banner} alt="Banner" width={1366} height={350}/>
    </div>
  )
}

export default Hero