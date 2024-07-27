import React from 'react';
import myteam from '../img/myteam.png'
import { loyihalar } from '../data';

const Projects = () => {
    return (
        <div className='pt-20'>
            <div id='loyihalar' className='w-full max-w-[1440px] mx-auto px-5'>
                <div className='mb-20'>
                    <h2 className='font-bold text-4xl md:text-5xl leading-6 text-[hsl(45,100%,72%)] text-center mb-2'>Loyihalar</h2>
                    <p className='font-normal text-base leading-6  text-[hsl(45,100%,72%)] text-center md:text-xl mb-10 md:mb-20'>Men hozirgacha yaratgan veb-saytlar</p>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        loyihalar.map((e) => {
                            return (
                                <li key={e.id} className='flex flex-col bg-black rounded-lg '>
                                    <img className='grow rounded-t-lg' src={e.img} alt="" />
                                    <div className='flex flex-col gap-2 text-[hsl(45,100%,72%)] p-5'>
                                        <h3 className='font-semibold text-3xlbrend mb-2'>Loyihaning nomi - <span className='font-medium text-[hsl(45,100%,72%)]'>{e.title}</span></h3>
                                        <p className='font-medium text-lg mb-2'>{e.text}</p>
                                        <p className='font-medium text-lg brend'>
                                            <span className='mr-2'>Loyiha tuzilgan vaqti:</span>
                                            <span className='font-normal text-base text-[hsl(45,100%,72%)]'>
                                                {e.vaqti}
                                            </span>
                                        </p>
                                        <p className='font-medium text-lg brend'>
                                            <span className='mr-2'>Sahifa:</span>
                                            <span className='font-normal text-base text-[hsl(45,100%,72%)]'>
                                                {e.sahifasoni}
                                            </span>
                                        </p>
                                        <p className='font-medium text-lg grow mb-5 brend'>
                                            <span className='mr-2'>Texnologiyalar:</span>
                                            <span className='font-normal text-base text-[hsl(45,100%,72%)]'>
                                                {e.texnalogiya}
                                            </span>
                                        </p>
                                        <div className='flex justify-between items-center'>
                                            <a target='_blank' className='inline-block' href="https://kiyimlardokoni.netlify.app"><i className="fa-solid fa-link fa-lg"></i><span className='text-xl'> veb-sayt</span></a>
                                            <a target='_blank' className='inline-block' href="https://github.com/iyiy2008/Akstar"><i className="fa-brands fa-github fa-lg"></i><span className='text-xl'> github</span></a>
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