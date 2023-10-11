import React from 'react'

const Hero = () => {
  return (
    <div id='ha' className='w-full max-w-[1440px] mx-auto px-5 py-20'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-5xl leading-[60px] text-[#42446E] dark:text-white'>Salom 👋,<br />
          Mening ismim <br />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00C0FD] to-[#E70FAA]'>
            Yusupov Ismoiljon
          </span><br />
          Men veb-sayt yarataman
        </h2>
        <div className='flex justify-center text-center items-center w-[300px] h-[300px] bg-gradient-to-br to-[#E70FAA] from-[#00c0fd] dark:bg-gradient-to-br dark:from-[#E70FAA] dark:to-[#00c0fd] bg-clip-content p-6 rounded-full'>
          <div className='w-[240px] h-[240px] rounded-full bg-black'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero