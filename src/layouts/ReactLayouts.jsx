import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Texnologik from '../components/Texnologik'
// import Footer from '../components/Footer'

const ReactLayouts = () => {
  return (
    <div className='flex flex-col w-full h-screen dark:bg-black bg-white'>
      <Header />
      <main className='dark:bg-black bg-white grow'>
        <Outlet />
        <Texnologik />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default ReactLayouts