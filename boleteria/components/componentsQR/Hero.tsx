import React from 'react'
import { Button} from 'react-bootstrap';
import Image from "next/image";
import Logo from "../Logo-bus.jpg"

const Hero = () => {
  return (
    <div
        className='HeroContainer'><Button className='HeroButtonContainer' variant="light"><span className="text-custom  fw-bold">Validar</span></Button>
        <Image className='LogoContainer' src={Logo} alt="Logo" width={200} height={100}/>
        <h4>Empresa <br /> <br/>UNA Transporte</h4>
    </div>
  )
}

export default Hero