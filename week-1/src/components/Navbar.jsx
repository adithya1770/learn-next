import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className='text-3xl text-white h-10 w-96 bg-white ml-6 rounded-xl'>
        <a href="/home" className='pl-6 hover:text-blue-500 hover:text-4xl text-black font-mono' prefetch={true}>Home</a>
        <a href="/products" className='pl-8 hover:text-blue-500 hover:text-4xl text-black font-mono' prefetch={true}>Products</a>
        <Link href='/cart' className='pl-8 hover:text-blue-500 hover:text-4xl text-black font-mono' prefetch={true}>Cart</Link>
      </div>
    </div>
  )
}

export default Navbar
