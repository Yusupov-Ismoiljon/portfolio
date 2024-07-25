import React from 'react';


const Boglanish = () => {
  return (

    <div className='w-full max-w-[1440px] px-5 mx-auto py-20 text-[hsl(45,100%,72%)]'>
      <h2 className='font-bold text-2xl md:text-5xl leading-6 text-center mb-2'>Bog'lanish</h2>
      <p className='font-normal text-base leading-6 text-center md:text-xl mb-10 md:mb-20'>Men bilan bog'lanosh uchun</p>
      <form className='w-[1440px] flex flex-col items-center justify-center'>
        <div className='w-[1000px] grid grid-cols-2 gap-5 pb-5'>
          <input type="text" id="name" name="name" placeholder="To'liq ismimgiz" required autocomplete="off" />
          <input type="email" id="email" name="email" placeholder='Email address' required autocomplete="off" />
        </div>
        <div className='w-[1000px]'>
          <textarea className='w-full max-h-[250px] min-h-[150px]' id="message" name="message" placeholder='Xabaringiz' required autocomplete="off"></textarea>
        </div>
        <div className='w-[1000px] flex justify-end mt-5'>
          <button className='btn' type="submit">Yuborish</button>
        </div>
      </form>
    </div>
  );
}

export default Boglanish;