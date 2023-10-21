import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Texnologik from '../components/Texnologik'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const ReactLayouts = () => {
  return (
    <div className='flex flex-col w-full h-screen dark:bg-black bg-white'>
      <Header />
      <main className='dark:bg-black bg-white grow py-20'>
        <Outlet />
        <Hero />
        <Texnologik />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default ReactLayouts