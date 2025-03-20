import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='relative p-5 flex justify-center items-center border-b border-amber-50 shadow-md'>
      {/* Logo positioned to the left */}
      <Image src={'./images/logo.svg'} alt='logo' width={160} height={100} className='absolute left-5' />
      
      {/* Styled heading with matching colors */}
      <h1 className='text-3xl font-bold bg-gradient-to-r from-teal-500 via-yellow-500 to-orange-600 text-transparent bg-clip-text'>
        Start Thrifting!
      </h1>
    </div>
  )
}

export default Header;
