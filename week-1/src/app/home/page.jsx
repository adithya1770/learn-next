import React from 'react'

const home = () => {
  return (
    <>
    <head>
      <title>
        GameZY
      </title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    </head>
    <div className='h-32 w-full pl-5 bg-white bg-opacity-50 text-9xl font-mono montserrat-400 nav-top text-clr'>
      <b>GameZY</b>
        <div className='text-clr text-4xl absolute right-9 top-8 font-bold'>
          <p>Hello!</p>
          <div className='text-xl font-extralight'>
            <p>Ready to Game?</p>
          </div>
        </div>
        <div className='text-6xl h-2 w-96 font-light italic m-12 mt-28'>
          <p>From Noob to Pro, We’ve Got You Covered</p>
          <div className='h-12 w-36'>
          <br />
          <p className='font-bold text-xl not-italic bg-lime-500 text-black hover:text-white hover:bg-red-600 rounded-lg text-center'>
            <a href="">Explore Now</a>
          </p>
          </div>
        </div>
    </div>
    </>
  )
}

export default home
