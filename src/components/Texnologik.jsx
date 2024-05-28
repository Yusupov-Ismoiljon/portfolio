import React from 'react'
import git from '../img/git.png';
import html5 from '../img/html5.svg';
import css3 from '../img/css3.svg';
import bootstrap from '../img/bootstrap.svg';
import tailwindcss from '../img/tailwindcss.svg';
import js from '../img/js.svg';
import react from '../img/react.svg';
import redux from '../img/redux.svg';
import git1 from '../img/git.svg';
import github from '../img/github.svg';
const Texnologik = () => {
    return (
        <div className='w-full max-w-[1440px] mx-auto px-5 py-20'>
            <h2 id='texnologiya' className='font-bold text-2xl md:text-5xl leading-6 text-[#42446E] dark:text-white text-center mb-5 md:mb-10'>Texnologiya</h2>
            <p className='font-normal text-base leading-6 text-[#666] dark:text-[#A7A7A7] text-center md:text-xl mb-16 md:mb-28'>Men bilgan va foydalangan texnologiyalar</p>
            <ul className='flex items-center justify-center flex-wrap gap-20'>
                <li className='w-[166px] h-[166px] flex justify-center text-center li-img rounded-full show'>
                    <img className='w-28' src={html5} alt="html5" />
                </li>
                <li className='w-[166px] h-[166px] flex justify-center text-center li-img rounded-full show'>
                    <img className='w-28' src={css3} alt="css3" />
                </li>
                <li className='w-[166px] h-[166px] flex justify-center text-center li-img rounded-full show'>
                    <img className='w-28' src={bootstrap} alt="bootstrap" />
                </li>
                <li className='w-[166px] h-[166px] flex justify-center text-center li-img rounded-full show'>
                    <img className='w-28' src={tailwindcss} alt="tailwindcss" />
                </li>
                <li className='w-[166px] h-[166px] flex justify-center text-center li-img rounded-full show'>
                    <img className='w-28' src={js} alt="js" />
                </li>
                <li className='w-[166px] h-[166px] flex justify-center text-center li-img rounded-full show'>
                    <img className='w-28' src={react} alt="react" />
                </li>
                <li className='w-[166px] h-[166px] flex justify-center text-center li-img rounded-full show'>
                    <img className='w-28' src={redux} alt="redux" />
                </li>
                <li className='w-[166px] h-[166px] flex justify-center text-center items-center li-img rounded-full show'>
                    <img className='w-[140px] h-[140px]' src={git} alt="" />
                </li>
                <li className='w-[166px] h-[166px] flex justify-center text-center li-img rounded-full show'>
                    <img className='w-28' src={github} alt="git hub" />
                </li>
            </ul>
        </div>
    )
}

export default Texnologik