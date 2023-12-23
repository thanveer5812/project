import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from './CartsContext'

const Login = () => {

  const {login} = useCart();
  const {email,setEmail} = useCart();
  const {password,setPassword} = useCart();
  const {removeAllCart} = useCart()
  const {mode} = useCart()

const navigate = useNavigate()
  const checkLogin = (e) =>
  {
    e.preventDefault();
    if(login(e))
    {
      console.log("Yes dude")
      removeAllCart();
      navigate("/")
    }
  }

  

  return (
    <>
    <div className={`h-[80vh] grid place-content-center ${mode ? "bg-black text-white" : "bg-white text-black"}`}>
    <form className='w-[320px] my-auto h-max mx-auto rounded pl-2 py-2 border'>
    <h1 className='text-3xl text-center font-medium py-4'>Log in</h1>
      <div className="input-field relative py-2 w-[80%] mx-auto">
        
      <span className="material-symbols-outlined absolute top-[50%] text-[12px] left-[5%] translate-x-[-50%] translate-y-[-50%]">
mail
</span><input onInput={(e) => 
{
  setEmail(e.target.value)
}}

type="email" className={`border rounded w-[100%] py-2  text-sm  px-6 outline-none ${mode ? "bg-black text-white" : "bg-white text-black"}`} placeholder='Email' />
      </div>
      <div className="input-field relative py-2 w-[80%] mx-auto">

        
      <span className="material-symbols-outlined absolute top-[50%] text-[12px] left-[5%] translate-x-[-50%] translate-y-[-50%]">
      lock
</span><input onInput={(e) => 
{
  setPassword(e.target.value)
}} 
 type="password" className={`border rounded w-[100%] py-2 text-sm  px-6 outline-none ${mode ? "bg-black text-white" : "bg-white text-black"}`} placeholder='Password' />
      </div>
      <div className='py-1 mx-auto w-[80%]'>
        <a href="#" className='text-sm text-blue-600 '>Forgot Password?</a>
      </div>
      <div className='py-2 w-[80%] mx-auto'>
        <button onClick={(e) => 
        {
        checkLogin(e)
        }}
         className='bg-blue-600 text-white py-2 rounded w-[100%]'>Login</button>
      </div>
      <div className='flex flex-row py-2 items-center justify-center gap-5'>
        <p className='text-sm'>Don't have an Account? </p> <Link to="/signup" className='p-2 text-sm bg-green-500 text-white  rounded'>Sign Up</Link>
      </div>
      
    </form>
    </div>
    </>
  )
}

export default Login
