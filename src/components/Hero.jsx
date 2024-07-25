import React from 'react';
import Typewriter from 'typewriter-effect';
import Rasm from '../img/rasim.jpg';

const Hero = () => {
  return (
    <div id='haqida' className='w-full max-w-[1440px] mx-auto px-5 py-20'>
      <div className='hero-responsive'>
        <div className='lg:hidden block mb-5 md:mb-10'>
          <div className='flex justify-center text-center items-center w-[270px] h-[270px] bg-gradient-to-br to-[#E70FAA] from-[hsl(45,100%,72%)] bg-clip-content p-6 rounded-full'>
            <div className='w-[210px] h-[210px] rounded-full'>
              <img className='w-full h-full rounded-full' src={Rasm} alt="Portfolioni egasin rasimi" />
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-2xl md:text-4xl lg:text-5xl leading-6 md:leading-10 lg:leading-[60px] text-[hsl(45,100%,72%)]'>Salom 👋,<br />
            Mening ismim <br />
            <span className='hero-title'>
              Yusupov Ismoiljon
            </span>
            <br />
            Men veb-sayt yarataman
          </h2>

        </div>
        <div className='lg:block hidden'>
          <div className='flex justify-center text-center items-center w-[300px] h-[300px] bg-gradient-to-br to-[#E70FAA] from-[hsl(45,100%,72%)] bg-clip-content p-6 rounded-full'>
            <div className='w-[240px] h-[240px] rounded-full'>
              <img className='w-full h-full rounded-full' src={Rasm} alt="Portfolioni egasin rasimi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero