import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Boglanish = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const telegram_bot_id = '7356643982:AAHokJvxB0-UTQaRlUIbE8poH8L-2s1ckPU';
  const chat_id = '6469600559';

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Ismi: ${name}\nEmail: ${email}\nIzoh: ${message}`;

    const sendMessage = () => {
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

    const button = e.target.querySelector('.truck-button');
    const box = button.querySelector('.box');
    const truck = button.querySelector('.truck');

    if (!button.classList.contains('done')) {
      if (!button.classList.contains('animation')) {
        button.classList.add('animation');

        gsap.to(button, {
          '--box-s': 1,
          '--box-o': 1,
          duration: .3,
          delay: .5
        });

        gsap.to(box, {
          x: 0,
          duration: .4,
          delay: .7
        });

        gsap.to(button, {
          '--hx': -5,
          '--bx': 50,
          duration: .18,
          delay: .92
        });

        gsap.to(box, {
          y: 0,
          duration: .1,
          delay: 1.15
        });

        gsap.set(button, {
          '--truck-y': 0,
          '--truck-y-n': -26
        });

        gsap.to(button, {
          '--truck-y': 1,
          '--truck-y-n': -25,
          duration: .2,
          delay: 1.25,
          onComplete() {
            gsap.timeline({
              onComplete() {
                button.classList.add('done');
                sendMessage(); // Animatsiya tugagach xabarni yuboring
              }
            }).to(truck, {
              x: 0,
              duration: .4
            }).to(truck, {
              x: 40,
              duration: 1
            }).to(truck, {
              x: 20,
              duration: .6
            }).to(truck, {
              x: 96,
              duration: .4
            });
            gsap.to(button, {
              '--progress': 1,
              duration: 2.4,
              ease: "power2.in"
            });
          }
        });
      }
    } else {
      button.classList.remove('animation', 'done');
      gsap.set(truck, {
        x: 4
      });
      gsap.set(button, {
        '--progress': 0,
        '--hx': 0,
        '--bx': 0,
        '--box-s': .5,
        '--box-o': 0,
        '--truck-y': 0,
        '--truck-y-n': -26
      });
      gsap.set(box, {
        x: -24,
        y: -6
      });
    }
  };

  const isFormValid = name && email && message;

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
          <button type='submit' className='btn font-bold truck-button' disabled={!isFormValid}>
            <span className="default">Yuborish</span>
            <span className="success">
              Yuborildi
              <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <div className="truck">
              <div className="wheel"></div>
              <div className="back"></div>
              <div className="front"></div>
              <div className="box"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Boglanish;