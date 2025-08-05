
import React from 'react'
import Logo from './logo'

const Navbar = () => {
  return (
    <div className='h-20 bg-secondary border-b fixed inset-0 z-50'>
        <div className='container max-w-6xl h-full flex items-center justify-between'>
                 <Logo/>
        </div>
    </div>
  )
}

export default Navbar