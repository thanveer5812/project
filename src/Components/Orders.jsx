import React, { useEffect, useRef, useState } from 'react'
import { useCart } from './CartsContext'
import { useNavigate } from 'react-router-dom'
import gpay from "../ReactCollegeProjectStuff/Payments/google-pay-icon.webp"
import visa from "../ReactCollegeProjectStuff/Payments/visa.png"

const Orders = () => {
    const {cart} = useCart()
    const navigate = useNavigate()
    const {mode} = useCart()
    const {removeAllCart} = useCart()
    const {toggleName} = useCart()
    const [payment,setPayment] = useState(false)
    const [upiToggle,setUpiToggle] = useState(false)
    const [cardToggle,setCardToggle] = useState(false)
    const [cost,setCost] = useState()

    useEffect(() => 
    {
      
    },[])

  return (
    <>
      {cart.length == 0 ? 
      
      <div className='w-[85%] mx-auto text-center mt-[10vh]'>

      <h1 className='text-2xl'>You haven't ordered anything yet</h1> 
      </div>
      
      : 
      
     <div className={`w-[85%] mx-auto ${payment ? "blur" : ""}  ${mode ?  "text-white" : "text-black"}`}>
        <h1 className='py-2 px-4 text-2xl'>Your Orders </h1>
       {  cart.map((element) => 
       {
           return (
               <>
                <div className={`w-[100%] ${mode ? "text-black" : "text-black"} shadow-md lg:flex-row md:flex-row mx-auto border bg-gray-200  flex gap-3 py-3 px-4 rounded-md my-4 items-center justify-around`}>
         
         <img src={element.indexImage} className='w-[4rem]' alt={element.indexImage} />

         <h1 className='text-xs'>{element.productName}</h1>

         <div className='flex items-center'>
         <span class="material-symbols-outlined">
          currency_rupee
          </span>
          <p className='text-xs'>

             { new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(
               element.price[0])
              }
              </p>
          </div>

          <div>
      </div>

      </div>
                </>
            )
        })

       }
    
    <div className='w-[85%] py-2 mx-auto text-end'>
        <h1 className='text-xl mt-2'>Total Items : { cart.length}</h1>
        <button onClick={() => 
        {

            setPayment(true)
            let result = 0
             cart.forEach((initialValue) => 
            {
                 result += parseInt(initialValue.price[0]) 
            })
     
            setCost(result)
            // navigate("/")
            // removeAllCart()
        }} className='bg-orange-800 px-2 py-2 text-sm mt-3 rounded-md active:scale-90 text-white'>Book an Order</button>
    </div>
    </div>

  

} 

{payment && 

        <div className={`payment fixed top-[50%] ${mode ? "text-black bg-gray-200" : "text-black bg-gray-200"} bg-gray-200 left-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-[50%] md:w-[50%] w-[80%] px-3 py-4 rounded-md shadow-sm`}>
        <h1 className='text-3xl text-center'>
            Payment Method
        </h1>
        <div className='px-2 py-1'>
            <div className='flex'>
           <input type="radio" name="toggle" onClick={() => 
        {
            setUpiToggle(true)
            setCardToggle(false)
        }}  id="upi" />
           &nbsp;<label htmlFor="upi" className='text-sm flex gap-1 items-center'>
            <img src={gpay} className='w-[1rem] h-[.8rem] ' alt="" />
            UPI</label>
            </div>
           <div className={`py-2 ${upiToggle ? "" : "hidden"}`}>
            <input type="text" placeholder='example123' className='px-2 py-1 rounded-sm outline-none' /> @upi.com
           </div>
        </div>
        <div className='px-2 py-1'>
            <div className='flex'>
        <input type="radio" name="toggle" onClick={() => 
        {
            setCardToggle(true)
            setUpiToggle(false)
        }} id="card" />
           &nbsp;<label htmlFor="card"  className='text-sm pb-1 flex gap-1 items-center'>
            <img src={visa} className='w-[1rem] h-[.8rem] ' alt="" />
            Credit Card / Debit Card / Net Banking </label>
            </div>
           <div className={`py-1 w-[70%] ${cardToggle ? "" : "hidden"} `}>
             <div className='py-2 flex items-center justify-between'>
             <label htmlFor="card-number" className='' >Card Number</label>
             &nbsp;<input type="text" placeholder='xxxx xxxx xxxx xx00'  className='px-2 py-1 outline-none' name="" id="card-number" />
             </div>
             <div>
                <div className='py-1 flex items-center justify-between'> 
                  <label htmlFor="expiry" className='' >Expiry Date</label>
                  &nbsp;<input type="text"  placeholder='MM/YY' className='px-2 py-1 outline-none' name="" id="expiry" />
                </div>
                <div className='py-1 flex items-center justify-between'>
                   <label htmlFor="cvv" className='' >CVV</label>
                   &nbsp;<input type="text" placeholder='***'  className='px-2 py-1 outline-none' name="" id="cvv" />
                </div>
             </div>
           </div>
        </div>
{/* cost */}

<div className='text-end py-2'>
    <h1 className='flex items-center justify-end'>Total Cost : 
    <span class="material-symbols-outlined text-[14px]">
          currency_rupee
          </span>  {cost}
    </h1>
</div>

        <div className="btn py-3 w-[100%] text-end flex gap-2 justify-end">
            <button className='px-2 py-2 text-sm bg-blue-600 text-white rounded-md'>
                Confirm Payment
            </button>
            <button onClick={() => 
            {
                setPayment(false)
                setCardToggle(false)
            setUpiToggle(false)
            }} className='px-2 text-sm py-2 bg-red-500 text-white rounded-md'>
                Cancel
            </button>
        </div>
        </div>
}
    </>
  )
}

export default Orders
