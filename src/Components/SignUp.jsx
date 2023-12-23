import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartsContext';

const SignUp = () => {

    const {firstName,setFirstName}   = useCart();
    const {lastName,setLastName}   = useCart();
    const {email,setEmail}   = useCart();
    const {password,setPassword}   = useCart();
    const {confirmPassword,setConfirmPassword}   = useCart();
    const {mode} = useCart()
    const {signup} = useCart();
    const navigate = useNavigate()
    const checkSignUp = (e) => 
    {
        e.preventDefault();
          if(signup(e))
          {
            navigate("/")
          }
    }

  return (
    <>
    <div className=' h-[80vh] grid place-content-center'>

    <form className='w-[320px] h-max my-auto mx-auto rounded pl-2 py-2 border'>
    <h1 className='text-3xl text-center font-medium py-4'>Sign Up</h1>


    <div className="input-field py-2 w-[80%] mx-auto gap-3 grid grid-cols-1">
        <div className='relative'>
        <span className="material-symbols-outlined absolute top-[50%] text-base left-[4%] translate-x-[-50%] translate-y-[-50%]">
person
</span>
       <input onInput={(e) => {
                setFirstName(e.target.value)
       }} type="text"  className={`border w-[100%] py-2  text-sm rounded px-6 outline-none ${mode ? "bg-black text-white" : "bg-white text-black"}`} placeholder='First Name' />
        </div>
        <div className='relative'>

<span className="material-symbols-outlined absolute top-[50%] text-base left-[4%] translate-x-[-50%] translate-y-[-50%]">
person
</span><input onInput={(e) => 
{
    setLastName(e.target.value)
}}
type="text" className={`border w-[100%] py-2  text-sm rounded px-6 outline-none ${mode ? "bg-black text-white" : "bg-white text-black"}`} placeholder='Last Name' />
</div>
        </div>



      <div className="input-field relative py-2 w-[80%] mx-auto">
        
      <span className="material-symbols-outlined absolute top-[50%] text-base left-[4%] translate-x-[-50%] translate-y-[-50%]">
mail
</span><input onInput={(e) => 
{
    setEmail(e.target.value)
}}

type="email" className={`border w-[100%] py-2  text-sm rounded px-6 outline-none ${mode ? "bg-black text-white" : "bg-white text-black"}`} placeholder='Email' />
      </div>


      <div className="input-field relative py-2 w-[80%] mx-auto">
        
      <span className="material-symbols-outlined absolute top-[50%] text-base left-[4%] translate-x-[-50%] translate-y-[-50%]">
      lock
</span><input onInput={(e) => 
{
    setPassword(e.target.value)
}}

type="password" className={`${mode ? "bg-black text-white" : "bg-white text-black"} border w-[100%] py-2 text-sm  rounded px-6 outline-none`} placeholder='New Password' />
      </div>

      <div className="input-field relative py-2 w-[80%] mx-auto">
        
      <span className="material-symbols-outlined absolute top-[50%] text-base left-[4%] translate-x-[-50%] translate-y-[-50%]">
      lock
</span><input onInput={(e) => 
{
    setConfirmPassword(e.target.value)
}}

type="password" className={` ${mode ? "bg-black text-white" : "bg-white text-black"} border w-[100%] py-2 text-sm  rounded px-6 outline-none`} placeholder='Confirm Password' />
      </div>


      <div className='py-2 w-[80%] mx-auto'>
        <button className='bg-blue-600 text-white py-2 rounded w-[100%]'
          onClick={(e) => checkSignUp(e)}
        >Create Account</button>
      </div>
      <div className='flex flex-row py-2 items-center justify-center gap-5'>
        <p className='text-sm'>Already have an Account? </p> <Link to="/login" className='p-2 text-sm bg-green-500 text-white  rounded'>Log in</Link>
      </div>
      
    </form>
    </div>
    </>
  )
}

export default SignUp
