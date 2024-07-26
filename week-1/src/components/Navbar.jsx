import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='text-3xl text-white h-10 w-72 bg-white ml-6 rounded-xl'>
        <a href="/home" className='pl-6 hover:text-blue-500 hover:text-4xl text-black font-mono'>Home</a>
        <a href="/products" className='pl-8 hover:text-blue-500 hover:text-4xl text-black font-mono'>Products</a>
      </div>
    </div>
  )
}

export default Navbar
