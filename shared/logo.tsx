
import Link from 'next/link'
import React from 'react'


const Logo = () => {
  return (
    <Link href='/' >
      <div className='flex items-center gap-1'>
        <img src={'/cart1.png'} alt='Logo' width={40} height={40} />
      </div>
    </Link>
  )
}

export default Logo