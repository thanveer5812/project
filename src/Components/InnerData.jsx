import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { data } from './ImageData';
import { useState } from 'react';
import { useCart } from './CartsContext'; 

const InnerData = () => {
    const {dataAdded} = useCart()
    const [size,setSize] = useState(0)
    const {id} = useParams();
    const {addToCart} = useCart()
    
    const [list,setList]  = useState(data[id-1].indexImage)
  return (
    <>
        <div>
            <div className='w-[100%] h-[50vh] bg-gray-100 flex flex-col justify-around'>
                <div className=''>
                <img src={list} className='w-[12rem] mx-auto py-4' alt="" />
                </div>
                <div className=''>
                    <ul className='flex items-center justify-center gap-4'>
                        {data[id-1].images.map((el) => 
                        {
                            return (
                                <li 
                                 onClick={() => 
                                {
                                    setList(el)
                                }}
                                 className='px-4 cursor-pointer py-2 rounded-md shadow-sm hover:shadow-md border-2'>
                                 <img className='w-[3rem]' src={el} />
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>

            <div className='w-[90%] mx-auto mt-4'>
                <span className='flex items-center justify-between pb-2'>

                <h1 className='text-3xl font-medium'>
                    {data[id-1].productName}
                </h1>

                <p className='text-xl font-medium flex items-center justify-center'>
                <span class="material-symbols-outlined">
currency_rupee
</span>{data[id-1].price[size]}
                </p>
                </span>
                

                <div className='mt-1'>
                    <h1 className='text-md font-medium'>
                        Available Size
                    </h1>

                    <div className='flex gap-2 py-3 '>
                        {data[id-1].size.map((el,index) => 
                        {
                            return (
                                <>
                                <button className='px-3 shadow-sm py-1 text-sm rounded-md border-2 hover:bg-orange-500 hover:text-white'
                                 onClick={() => 
                                {
                                    setSize(index)
                                    setItem(0)
                                }}
                                >IN {el}</button>
                                </>
                            )
                        })}
                    </div>

                    <div className='flex items-center py-2 gap-2'>
                    <span class="material-symbols-outlined">
                        shopping_cart
                        </span>
                        <div className='flex  items-center gap-2'>

                        <button ref={dataAdded}
                        className='mx-2  bg-[#001923] text-white cursor-pointer rounded-md border-2 px-2 py-2 text-sm'
                         onClick={() => 
                        {
                            addToCart(data[id-1])
                            dataAdded.current.disabled = true;
                            dataAdded.current.style.opacity = '.6';
                            dataAdded.current.style.cursor = 'not-allowed';
                            dataAdded.current.innerText = "Cart Added Successfully"
                        }
                        } >
                            Add to Cart
                        </button>
                        </div>
                    </div>
 
                        <div className='py-3'>
                            <h1 className='py-2 text-2xl font-medium'>Product Details</h1>
                            <p className='py-2 text-sm'>

                            {data[id-1].productDescription}
                            </p>
                        </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default InnerData
