import React, { useState, useEffect } from 'react';
import SocialIcons from '../components/SocialIcons'
const Footer = () => {

  return (
      <div className='w-full max-w-[1440px] px-5 mx-auto'>
        <div className='flex items-center justify-between'>

          <a className='font-bold text-4xl text-[hsl(45,100%,72%)] inline-block' href='#uy'>
            <b>Yusupov.</b>
          </a>

          <div>
            <SocialIcons />
          </div>
        </div>
      </div>
  )
}

export default Footer;