import React from 'react'
import './page.css'
import Button from '@components/Button'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Image from 'next/image'
import nav from '/public/nav.png';

const page = () => {
  return (
    <div>
    <head>
      <title>
        Adithya P S
      </title>
    </head>
    <h1 className='pl-96 text-9xl text-white font-bold font-mono'>Adithya P S</h1>
    <div className='text-3xl text-white ml-82 mt-24 font-mono'>
    <div className='tracking-wide absolute left-5'>
      <p className='italic'>I am a proactive and inquisitive individual who is deeply involved in programming and technology. Adithya is currently a computer science student about to finish his freshman year and is keen on upskilling himself during his holidays. I've learnt how to create dynamic and static routes, creating a next app.I've learnt how to create dynamic and static routes, creating a next app.</p>
    </div>
    <br />
    <div className='absolute right-44 bottom-5 h-64 w-64 moving'>
      <img src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png" alt="https://img.lovepik.com/element/45009/1966.png_860.png" />
    </div>
  </div>
  <div className='pt-80 pl-130 h-52 w-64'>
    <Image 
    src={nav}/>
  <Button/>
  <br />
  <br />
  <Navbar/>
  </div>
  <Footer />
  </div>
  )
}

export default page

