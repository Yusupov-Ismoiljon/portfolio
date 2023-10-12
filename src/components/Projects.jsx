import React from 'react';
import myteam from '../img/myteam.png'

const Projects = () => {
    return (
        <div id='lo' className='py-20'>
            <div className='w-full max-w-[1440px] mx-auto px-5'>
                <div className='mr-20'>
                    <h2 className='font-bold text-5xl leading-6 text-[#42446E] dark:text-white text-center mb-10'>Loyihalar</h2>
                    <p className='font-normal text-2xl leading-6 text-[#666] dark:text-[#A7A7A7] text-center mb-28'>Men hazircha qilngan veb-saytlar</p>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <li className='bg-white dark:bg-[#363636] rounded-lg show'>
                        <img className='rounded-t-lg' src={myteam} alt="" />
                        <div className='dark:text-white p-5'>
                            <h3 className='font-medium text-2xl mb-2'>Loyihaning nami - MyTeam</h3>
                            <p className='font-medium text-lg mb-2'>Ushbu sayt 'Utrujja team' jamoasi haqida ma'lumot beradi. Sayt Css amaliyotda qo'llash va yaxshiroq o'rganish maqsadida test loyiha sifatida qilingan.</p>
                            <p><span className='font-medium text-lg text-green-600'>Loyiha tuzilgan vaqti: </span>
                                27-fevral 2023-yil
                            </p>
                            <p><span className='font-medium text-lg text-green-600'>Sahifa: </span>
                                2
                            </p>
                            <p className='mb-5'><span className='font-medium text-lg text-green-600'>Texnologiyalar: </span>
                                HTML, CSS
                            </p>
                            <div className='flex justify-between items-center'>
                                <a target='_blank' className='inline-block' href="https://elegant-rabanadas-2f70b5.netlify.app/"><i class="fa-solid fa-link fa-lg"></i><span className='text-xl'> veb-sayit</span></a>
                                <a target='_blank' className='inline-block' href="https://github.com/iyiy2008/myteam"><i class="fa-brands fa-github fa-lg"></i></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;