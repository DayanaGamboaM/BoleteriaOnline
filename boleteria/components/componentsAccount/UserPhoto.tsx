import Image from 'next/image'
import React from 'react'
import Banner from "../../public/bus-banner.jpg";
import UserProfile from "../../public/usuario.png";

const UserPhoto = () => {
  return (

    <div className="container-account">
        <div className="banner">
          <Image
            src={Banner}
            alt="Banner"
            placeholder="blur"
            width={1280}
            height={350}
          />
          <div className="user-profile">
            <Image
              src={UserProfile}
              alt="user pofile"
              className='user-image'
              placeholder="blur"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
  )
}

export default UserPhoto