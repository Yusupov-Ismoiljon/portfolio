import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-ful max-w-[1440px] mx-auto px-5 py-5'>
      <div className='flex justify-between items-center'>
        <Link to={'/'}>
          <h1 className='font-bold text-3xl text-white'>Portfolio</h1>
        </Link>
      </div>
    </div>
  )
}

export default Header