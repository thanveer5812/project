import React, { useEffect } from 'react'
import { Link,Route,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useCart } from './CartsContext';
import { Pagination } from 'swiper/modules';
import {data} from "./ImageData"
import Footer from './Footer';
import "./home.css"

const Home = () => {

    const [input,setInput] = useState("")
    const [currentData,setCurrentData] = useState("")
    const [FilterList,setFilterList] = useState(data)
    const {toggleName} = useCart()
    const {mode} = useCart()
    const navigate = useNavigate()
    const filterList = (e) => 
    {
           setInput(e.target.value);
           if(input == "")
           {
   
            setFilterList(data)
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

          


    // const list = [
    //     ["Shoes",`steps`
    // ],
    //     ["Jackets",`apparel`
    // ],
    //     ["Watches",`watch`
    // ],
    //     ["Basket Ball",`sports_basketball`
    // ]
    // ]

    const list = [
      ["Shoes",`steps`]
    ]

    const SampleSlider = () => 
    {
  return <>
  
      <div className='w-[100%] pb-10 mt-6 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-[repeat(1,15rem)] place-items-center gap-3 items-center content-center'>
      {
        FilterList.map((element,index) => 
        {
            return (
                <>
                          <Link to={`/products/${index+1}`}>
                            <div className={`shadow-sm parent px-1 py-3 hover:& bg-gray-200 rounded-md border-2 w-[15rem] text-center ${mode ? "text-black" : "text-black"}`}>
                              <img className='w-20 mx-auto drop-shadow-md z-[-1]' src={element.indexImage} alt="" />
                              <div className='pt-5 '>
                                  <h1 className='font-medium'>{element.productName}</h1>
                                  <p className='mt-2 flex items-center justify-center text-sm '><span class="material-symbols-outlined text-md">
          currency_rupee
          </span> {
            element.price[3]
          }
                              <div>
                              <span class="material-symbols-outlined pt-2 pl-2">
          favorite
          </span>
                              </div>
          </p>
                              </div>
                            </div>
                </Link>

                </>
            )
        })
      }
        </div>
        </>

    }


    const NewSlider = () => 
    {
      return <>
       
       <Swiper 

        pagination={{
          clickable: false,
        }}
        className={`swiper w-[100% mt-[3rem] py-5 ${mode ? "text-black" : " text-black"}`}
      >

     

       {
        FilterList.map((element,index) => 
        {
            return (
                <>
                  <SwiperSlide style={{minWidth:"10rem"}}  className='swiper-slide h-[20rem] shadow-sm parent py-2 bg-gray-200 rounded-md border-2 text-center'>

                  
                          <Link to={`/products/${index+1}`}>
                            <div className=''>
                              <img className='w-14 mx-auto drop-shadow-md z-[-1]' src={element.indexImage} alt="" />
                              <div className='pt-5 text-sm'>
                                  <h1 className='font-medium text-sm'>{element.productName}</h1>
                                  <p className='mt-2 flex items-center justify-center text-md '><span class="material-symbols-outlined text-sm">
          currency_rupee
          </span> {
            element.price[3]
          }
                              <div>
                              <span class="material-symbols-outlined pt-2 pl-2">
          favorite
          </span>
                              </div>
          </p>
                              </div>
                            </div>
                </Link>
</SwiperSlide>
                </>
            )
        })
      }

</Swiper>

      </>
    }


    


  const Toggle =  () => 
  {
    return (window.innerWidth >= 650) ? <SampleSlider /> : <NewSlider />
  }


  useEffect(() => 
  {
        window.addEventListener('resize',() => 
        {
          setCurrentData(Toggle())
        })

        setTimeout(() => 
        {
          setCurrentData(Toggle())

        })
  },[])

  useEffect(() => 
  {
        window.addEventListener('resize',() => 
        {
          setCurrentData(Toggle())
        })

        setTimeout(() => 
        {
          setCurrentData(Toggle())

        })
  },[FilterList])

 
  
  return (
    <>
{  (toggleName == "") ?  navigate("/login") : 

      <div className={`lg:w-[70%] h-screen md:w-[70%] sm:w-[70%] w-[90%] mx-auto mt-4 z-[2] ${mode ? "bg-black text-white" : "bg-white text-black"}`}>
 
        <div className='py-2 flex items-center gap-2 px-2'>
          <h1 className='text-2xl px-2'>Hi, {toggleName}</h1>
          
        </div>
      <div className='py-2'>
        <h1 className='text-xl'>
            Our <span className='font-medium '>Products</span>
        </h1>
      </div>
      <div className='mt-4 relative flex items-center gap-4'>
      <span className="material-symbols-outlined absolute  lg:right-[10%] md:right-[10%] sm:right-[10%] right-[20%] text-black top-[50%] translate-y-[-50%] ">
search
</span>
        <input type="text" onChange={ (e) => 
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

   {/* <div className='mt-5 w-[100%] text-center flex gap-3 filter-list'>
        {
            
                    list.map((el,index) => {
                        return (<>
                        <button key={index} 
                        className='px-2 hover:shadow-md shadow-sm text-[10px] py-1 rounded-md border-2 border-gray-200 flex items-center gap-[1px]'>
                        <span className='material-symbols-outlined text-[10px]'
                        >
                            {el[1]}
                        </span>
                        {el[0]}
                     </button>
                            </>)
                    })
                }
            
   </div> */}

            {currentData}
        
      </div>
}

    </>
  )
}

export default Home
