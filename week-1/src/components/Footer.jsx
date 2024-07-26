import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-6 w-32 bg-lime-600 text-black rounded-md absolute left-163 bottom-3'>
      <Link href="/products" className='pl-3 hover:text-white' prefetch={true}>Products</Link>
      <Link href="/cart" className='pl-4 hover:text-white' prefetch={true}>Cart</Link>
    </div>
  )
}

export default Footer
