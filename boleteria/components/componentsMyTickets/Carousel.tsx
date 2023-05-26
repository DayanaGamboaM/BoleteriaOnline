import React from 'react'
import Image from 'next/image'
import Banner from "../../public/Banner-bus-figma.jpeg"

const Carousel = () => {
  return (
    <div >
      <div className="d-flex justify-content-center">
        <Image
          className="imgCont img-fluid"
          src={Banner}
          alt="Banner"
        />
      </div>
    </div>
  )
}

export default Carousel