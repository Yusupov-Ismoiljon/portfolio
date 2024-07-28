import React, { useState } from 'react';
import axios from 'axios';

const Boglanish = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const telegram_bot_id = '7356643982:AAHokJvxB0-UTQaRlUIbE8poH8L-2s1ckPU';
  const chat_id = 6469600559;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Ismi: ${name}\nEmail: ${email}\nIzoh: ${message}`;

    axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      chat_id: chat_id,
      text: text,
    })
    .then((response) => {
      console.log(response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
  };

  return (
    <div className='w-full max-w-[1440px] px-5 mx-auto py-20 text-[hsl(45,100%,72%)]'>
      <h2 className='font-bold text-4xl md:text-5xl leading-6 text-center mb-2'>Bog'lanish</h2>
      <p className='font-normal leading-6 text-center text-lg md:text-xl mb-10 md:mb-20'>Men bilan bog'lanish uchun</p>
      <form className='w-full flex flex-col items-center justify-center' onSubmit={handleSubmit}>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5 pb-5'>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="To'liq ismimgiz"
            required
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email address'
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <textarea
            className='w-full max-h-[250px] min-h-[150px]'
            id="message"
            name="message"
            placeholder='Izoh qoldiring'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className='w-full flex justify-end mt-5'>
          <button className='btn font-bold' type="submit" id='btn'>Yuborish</button>
        </div>
      </form>
    </div>
  );
}

export default Boglanish;