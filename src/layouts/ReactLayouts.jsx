import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Texnologik from '../components/Texnologik'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Boglanish from '../components/Boglanish'

const ReactLayouts = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-black'>
      <Header />
      <main className='bg-black grow py-20'>
        <Outlet />
        <Hero />
        <Texnologik />
        <Projects />
      <Boglanish />
      </main>
      <Footer />
    </div>
  )
}

export default ReactLayouts