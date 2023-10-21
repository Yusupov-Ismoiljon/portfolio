import React from 'react';
import myteam from '../img/myteam.png'
import { loyihalar } from '../data';

const Projects = () => {
    return (
        <div id='lo' className='pt-20'>
            <div className='w-full max-w-[1440px] mx-auto px-5'>
                <div className='mb-20'>
                    <h2 className='font-bold md:text-5xl leading-6 text-[#42446E] dark:text-white text-center md:mb-10 mb-5'>Loyihalar</h2>
                    <p className='font-normal text-lg md:text-2xl leading-6 text-[#666] dark:text-[#A7A7A7] text-center mb-28'>Men hazircha qilngan veb-saytlar</p>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        loyihalar.map((e) => {
                            return (
                                <li key={e.id} className='flex flex-col bg-white dark:bg-[#363636] rounded-lg show'>
                                    <img className='grow rounded-t-lg' src={e.img} alt="" />
                                    <div className='dark:text-white p-5'>
                                        <h3 className='font-semibold text-2xl brend mb-2'>Loyihaning nomi - <span className='font-medium dark:text-white text-black'>{e.title}</span></h3>
                                        <p className='font-medium text-lg mb-2'>{e.text}</p>
                                        <p className='font-medium text-lg brend'>
                                            <span className='mr-2'>Loyiha tuzilgan vaqti:</span>
                                            <span className='font-normal text-base text-black dark:text-white'>
                                                {e.vaqti}
                                            </span>
                                        </p>
                                        <p className='font-medium text-lg brend'>
                                            <span className='mr-2'>Sahifa:</span>
                                            <span className='font-normal text-base text-black dark:text-white'>
                                                {e.sahifasoni}
                                            </span>
                                        </p>
                                        <p className='font-medium text-lg brend'>
                                            <span className='mr-2'>Texnologiyalar:</span>
                                            <span className='font-normal text-base text-black dark:text-white'>
                                                {e.texnalogiya}
                                            </span>
                                        </p>
                                        <div className='flex justify-between items-center'>
                                            <a target='_blank' className='inline-block' href="https://elegant-rabanadas-2f70b5.netlify.app/"><i className="fa-solid fa-link fa-lg"></i><span className='text-xl'> veb-sayt</span></a>
                                            <a target='_blank' className='inline-block' href="https://github.com/iyiy2008/myteam"><i className="fa-brands fa-github fa-lg"></i><span className='text-xl'> github</span></a>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Projects;