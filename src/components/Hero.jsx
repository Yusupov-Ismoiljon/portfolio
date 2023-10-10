import React from 'react'

const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-5'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-5xl leading-[50px] text-[#42446E] dark:text-white'>Salom 👋,<br />
          Mening ismim <br />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00C0FD] to-[#E70FAA]'>
            Yusupov Ismolijon
          </span><br />
          Men veb-sayt uchun <br /> narsalarni yarataman
        </h2>
        <div className='w-[300px] h-[300px] bg-black dark:bg-white  rounded-full'>

        </div>
      </div>
    </div>
  )
}

export default Hero