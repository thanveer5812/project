import React from 'react'
import { useState } from 'react'
import { useCart } from './CartsContext'
const Cart = () => {
    const {cart} = useCart()
   
    const {removeCart} = useCart()
    const [input,setInput] = useState("")
    const [FilterList,setFilterList] = useState(cart)
   const {mode} = useCart()
    const filterList = (e) => 
    {
           setInput(e.target.value);
           if(input == "")
           {
   
            setFilterList(cart)
            console.log(FilterList)
          }
          else 
          {
            
            let result = FilterList.filter((el) =>
            {
             
              return Array.from(el.productName.toLowerCase()).join("").includes(input)
             })
            setFilterList(result)
            console.log(FilterList)
  
            }
          }


    const CartAdd = ({element,index}) => 
    {
      const [value,setValue] = React.useState(1)

      return <>
       <div className={` ${mode ? "text-black" : "text-black"} lg:w-[75%] md:w-[75%] sm:w-[75%] lg:flex-row md:flex-row sm:flex-col 
        w-[17rem] mx-auto border bg-gray-200  flex gap-3 py-2 px-4 rounded-md my-4 items-center justify-around flex-col`}>
         
         <img src={element.indexImage} className='w-[4rem]' alt={element.indexImage} />

         <h1 className='text-xs'>{element.productName}</h1>

         <div className='flex gap-2 items-center'>
      <button onClick={() => 
      {
        if(value == 1)  {
          setValue(1) }
        else 
        {
          setValue(value-1)
        }
      }}
       className='px-2 py-1 bg-black text-white text-xs rounded-md' >-</button>
       {value}
       <button onClick={() => 
       {
        if(value == 5)  {
          setValue(5) }
        else 
        {
          setValue(value+1)
        }
       }}
       className='px-2 py-1 bg-black text-xs text-white rounded-md' >+</button>
    </div>
    
         <div className='flex items-center'>
         <span class="material-symbols-outlined">
          currency_rupee
          </span>
          <p className='text-xs'>

             { new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(
               value * element.price[0])
              }
              </p>
          </div>

          <div>
        <button className='text-xs px-2 py-2 bg-black text-white rounded' onClick={() => 
        {
           removeCart(element)
        }}>
          Remove Item
        </button>
      </div>

      </div>

      
          
       </>

    }

  return (<div style={{ height:"" }}>
  {
    cart.length == 0 ? 
      <div className={`w-[100%] mt-10 flex items-center text-xl justify-center ${mode ? "text-white" : "text-black"}`}>
    <h1>No items Added</h1> 

      
      </div>
    : 

       <>
        <div className='lg:w-[70%] md:w-[70%] text-2xl sm:w-[70%] w-[90%] mx-auto mt-4 z-[2]'>

<div className=''>
  <h1 className='text-xl'>
      Cart <span className='font-medium '>Items</span>
  </h1>
</div>
<div className='mt-4 relative flex items-center gap-4'>
<span className="material-symbols-outlined absolute  lg:right-[10%] md:right-[10%] sm:right-[10%] right-[20%] top-[50%] translate-y-[-50%] text-black">
search
</span>
  <input type="text" onKeyUp={ (e) => 
  {
    filterList(e)
  }
  } placeholder='Search Products' className='bg-gray-200 border-2  focus:border-black focus:border-2 text-black placeholder:text-black px-4 py-3 rounded text-sm outline-none w-[100%] shadow-sm' name="" id="" />


  <div>
  <span className="material-symbols-outlined ">
filter_list
</span>
  </div>
</div>
</div>

<div className='w-[90%] mx-auto mt-4'>

{
  FilterList.map((element,index) => 
  {

    return (
    
      // <CartAdd price={element.price[0]} />
     
      <>
    <CartAdd element={element} index={index} />
    

      </>

      )

  })
}

</div>



</>
}
    </div>
  )

}

export default Cart
