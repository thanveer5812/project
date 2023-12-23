import React, { useState } from 'react'
import "../index.css"
import { Link, useSearchParams } from 'react-router-dom'
import "./home.css"
import { useCart } from './CartsContext'

export default function Header() {

  const {cart} = useCart()
  const {toggleName} = useCart()
  const {mode} = useCart()
  const {modeActive} = useCart()
  return (
    <>
      <header className={`w-[100%] sticky top-0  px-4 py-4 ${mode ? "bg-black text-white" : "bg-white text-black"} z-[2]`}>
        <div className="w-[90%] mx-auto flex justify-between items-center">
            <Link to="/" >
            <h1 className='text-3xl font-[400] z-[2]'>
                Sportify
            </h1>
            </Link>
            <Link>
             <p>
             <span className="material-symbols-outlined z-10 favourite">
favorite
</span>
             </p>
            </Link>
            <ul className={`section ${mode ? "dark" : "light"} lg:static md:static sm:static flex gap-4  py-2 px-3`}>
                <li>
                  <Link to="/">
                <span className="material-symbols-outlined z-10">
home
</span>
                  </Link>
                </li>

                { toggleName == "" ? "" :

                <>
                
                <li className='relative'>
                  <Link to="/cart">
                <span className="material-symbols-outlined z-10">
shopping_cart
</span>
{cart.length == 0 ? "" : <h1 className='absolute text-[8px] top-[-50%] right-[-50%] px-2 py-1 bg-black text-white rounded-md'>
    {cart.length}
  </h1>}
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className='flex gap-2'>
                <span className="material-symbols-outlined z-10">
package
</span> 
                  </Link>
                </li>
                </>
              }

                <li>
                  <Link to="/login" className='flex gap-2'>
                <span className="material-symbols-outlined z-10">
person
</span> 
                  </Link>
                </li>

                <li className='cursor-pointer selection:bg-[transparent]' onClick={() => 
                {
                  modeActive()
                }}
                >
                <span className="material-symbols-outlined z-10">
     {mode ? "light_mode" : "dark_mode" }
</span> 
                </li>
            </ul>
        </div>
      </header>
    </>
  )
}
