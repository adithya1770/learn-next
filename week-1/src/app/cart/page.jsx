import React from 'react'
import './cart.css'

const cart = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <header>
        <h1 className='text-9xl montserrat-400 pt-10 pl-14 text-lime-600'>Cart</h1>
        <div className='h-4 w-full bg-lime-600 mt-6'></div>
      </header>
      <div className='h-2 w-full bg-lime-600 mt-96'>
          <h1 className='text-9xl montserrat-400 pt-10 pl-14 text-lime-600'>Total</h1>
          <a href="" className='text-9xl montserrat-400 pt-10 pl-14 text-lime-600'>Checkout</a>
      </div>
    </div>
  )
}

export default cart
