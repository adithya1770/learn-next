import React from 'react'
import Image from 'next/image'
import './products.css'

const page = () => {
    
  return (
    <>
    <head>
        <title>
          GameZY
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
    <div className='h-32 w-full div-clr montserrat-400'>
        <p className='font-bold text-8xl tracking-wide italic pl-3'>Game On!</p>
        <p className='font-medium text-2xl tracking-wide italic pl-3'>with authentic products and unmatched support</p>
        <div className='absolute right-48 top-14'>
            <h1 className='material-symbols-outlined font-extrabold'>shopping_cart</h1>
        </div>
        <div className='absolute right-24 top-12'>
            <a href="" className='font-extrabold text-4xl'>Cart</a>
        </div>
        <div>
        <h1 className='text-white absolute right-48 top-48 text-4xl font-bold'>Essentials</h1>
            <div className='h-96 w-80 absolute right-32 top-64 rounded-xl border'>
                <img src="https://w0.peakpx.com/wallpaper/959/16/HD-wallpaper-razer-mamba-wireless-wired-what-the-f-ever-black-mouse.jpg" className='pt-5'/>
                <p className='text-white pl-8 pt-5 font-extrabold'>Razer Mamba Mouse (Wireless)</p>
                <p className='text-white pl-8 pt-1 font-light'>Available in Black and White</p>
                <p className='text-white pl-8 pt-1 font-bold'>ON SALE</p>
                <p className='text-white pl-8 pt-1 font-light italic line-through'>$249.99</p>
                <p className='text-white pl-8 pt-1 font-light'>$199.99</p>
                <a href="" className='text-white pl-8 font-bold absolute left-28 bottom-5 text-2xl hover:text-lime-600'>BUY NOW</a>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/a5/c7/99/a5c7997ca72d6754c217b779f2a37dcd.jpg" className='pt-10 pr-96'/>
                <p className='text-white text-5xl absolute left-52 font-extrabold'>GIGABYTE Gaming PC</p>
                <p className='text-white text-5xl absolute right-96 font-extrabold hover:text-lime-600'>BUY NOW</p>
                <p className='text-white pt-24 pl-52 font-light italic text-3xl line-through inline-block'>$3499.99</p>
                <p className='text-white pl-10 font-bold text-3xl inline-block'>$3000.00</p>
                <span class="material-symbols-outlined text-white pl-32">local_shipping</span>
                <p className='text-white pl-2 font-extralight italic text-3xl inline-block'>Free Shipping</p>
            </div>
            <div>
            <p className='absolute right-72 pt-44 animation text-9xl font-extrabold text-lime-600'>KILLER DEAL</p>
                <img src="https://www.tradeinn.com/f/13748/137481142_4/asus-xg43vq-43.4-dfhd--led-curved-gaming-monitor.jpg" className='p-96 pt-64 pb-0'/>
                <p className='text-white text-6xl absolute left-44 font-extrabold pb-2'>ASUS ROG Gaming Monitor 420Hz Refresh Rate</p>
                <p className='text-white text-5xl pt-44 absolute left-44 font-extrabold hover:text-lime-600'>BUY NOW</p>
                <p className='text-white text-3xl absolute left-160 pt-44 font-extralight italic'>$999.99 On Sale</p>
                <div className='absolute right-52 pt-44'>
                <input type="text" placeholder="Check Availability" className='placeholder-black rounded-xl text-center h-8 w-64'/>
                </div>
            </div>
        </div>
        <h1 className='text-white pt-96 pl-80 font-extrabold text-8xl'>Gears to Level Up</h1>
        <div>
            <br /><br /><br />
            <hr />
            <img src="https://images.unsplash.com/photo-1679429973860-d430a100db8c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='pt-10 inline-block'/>
            <p className='text-white absolute right-12 text-8xl font-bold pt-64 inline-block'>Razer <br />Headphones</p>
            <p className='text-white absolute right-12 text-3xl font-extralight pt-128 inline-block'>$349.99 only</p>
            <p className='text-white absolute right-12 text-4xl hover:text-lime-600 font-bold pt-130 inline-block'>BUY NOW</p>
            <p className='text-white absolute right-12 text-3xl font-extralight pt-160 inline-block italic'>limited stock only!</p>
        </div>
        <hr />
        <h1 className='text-white pt-20 pl-64 font-extrabold text-8xl'>Computer Hardware</h1>
        <h2 className='text-white pt-2 pl-72 italic font-extralight text-4xl'>By Authorised Dealers with Support and Maintanence</h2>
        <div className='h-96 w-80 rounded-xl border pt-4 mt-32 ml-32 inline-block'>
            <img src="https://1734811051.rsc.cdn77.org/data/images/full/395597/nvidia-rtx-3090.jpg?w=600?w=430" className='pt-4'/>
            <p className='text-white pl-16 pt-5 font-extrabold'>Nvidia RTX 4090 PC GPU</p>
            <p className='text-white pl-32 pt-1 font-light'>$2499.99</p>
            <p className='text-white absolute left-52 text-3xl hover:text-lime-600 font-bold pt-164 inline-block'>BUY NOW</p>
            <div className='pt-12 pl-8'>
            <img src="https://www.hindustantimes.com/ht-img/img/2024/02/22/1600x900/FILES-US-INTERNET-SEMICONDUCTORS-EARNINGS-NVIDIA-0_1708570621672_1708570635411.jpg" className='h-8 w-14 inline-block'/>
            <p className='inline-block text-white font-extralight'>Nvidia Authorised Dealer</p>
            </div>
        </div>
        <div className='h-96 w-80 rounded-xl border pt-4 mt-32 ml-44 inline-block'>
            <img src="https://images.hothardware.com/contentimages/newsitem/64201/content/corsair-vengeance-ddr5-ram.jpg" className='pt-4'/>
            <p className='text-white pl-10 pt-5 font-extrabold'>Corsair Vengeance 32GB RAM</p>
            <p className='text-white pl-32 pt-1 font-light'>$999.99</p>
            <p className='text-white absolute left-168 text-3xl hover:text-lime-600 font-bold pt-164 inline-block'>BUY NOW</p>
            <div className='pt-12 pl-8'>
            <img src="https://br.atsit.in/nl/wp-content/uploads/2021/06/corsair-onthult-3080-ti-3070-ti-vengeance-i7200-gaming-pcs.jpg" className='h-8 w-14 inline-block'/>
            <p className='inline-block text-white font-extralight'>Corsair Authorised Dealer</p>
            </div>
        </div>
        <div className='h-99 w-80 rounded-xl border p-1 ml-44 inline-block'>
            <img src="https://media.ldlc.com/bo/images/fiches/carte-mere/asus/x570/rog_crosshair_viii_dark_hero/800_1(1).jpg" className='pt-4'/>
            <p className='text-white pl-10 pt-5 font-extrabold'>ASUS Motherboard x86 ARM</p>
            <p className='text-white pl-32 pt-1 font-light'>$1299.99</p>
            <p className='text-white absolute right-40 text-3xl hover:text-lime-600 font-bold pt-164 inline-block'>BUY NOW</p>
            <div className='pt-14 pl-8'>
            <img src="https://cdn-icons-png.freepik.com/512/5969/5969050.png" className='h-10 w-14 inline-block'/>
            <p className='inline-block text-white font-extralight'>ASUS Authorised Dealer</p>
            </div>
        </div>
        <br />
        <br />
    </div>
    </>
  )
}

export default page
