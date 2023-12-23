import {useState,createContext,useContext, useRef}from 'react'
const CartContext = createContext();
export function useCart()
{
  return useContext(CartContext)
}
export function CartProvider({children}) {
    const [cart,setCart] = useState([]);
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [toggleName,setToggleName] = useState("")
    const dataAdded = useRef()
    const [cartComplete,setCartComplete] = useState()
    const [totalPrice,setTotalPrice] = useState([])
    const [mode,setMode] = useState(false)

    const addToCart = (product) => 
    {
       setCart([...cart,product])
    }
 
    const addTotalPrice = (currentPrice) => 
    {
      setTotalPrice([...totalPrice,currentPrice])
    }
   

    const modeActive = () => 
    {
     
        setMode(!mode)
        if(mode)
        {
          document.body.style.backgroundColor = "white"
          document.body.style.color = "black"
        }
        else 
        {
          
          document.body.style.backgroundColor = "black"
          document.body.style.color = "white"
        }
    }

    const removeCart = (value) => 
    {
      let result = cart.filter((el) => 
      {
        return value.id !== el.id;
      })
      setCart(result)
    }

    const removeAllCart = () => 
    {
      setCart([])
    }

    const login = (e) => 
    {
        e.preventDefault();
      if(email == "")
      {
        alert("Set Email")
      }
      else if(password == "")
      {
        alert("Please enter password field")
      }
      else 
      {
            let Email = JSON.parse(localStorage.getItem(email))
                  console.log(Email)
            if(Email) 
            {
                if(Email.password != password)
                {
                  alert("password is incorrect")
                }
                else 
                {
                  setToggleName(Email.firstName)
                 return true;
                }
            }
            else 
            {
              alert("Email is incorrect")
            }
      }
    }


    const createUser = ({email,...value}) =>
    {
         localStorage.setItem(email,
          JSON.stringify(
            {
              email,
              ...value
              
            }
          )
          );
         if(localStorage.getItem(email))
         {
          alert("Account Created Successfully")
          const {firstName} = {...value};
          setToggleName(firstName)
          return true
         }
    }
    const signup = (e) =>
    {
         e.preventDefault();
         if(firstName == "")
         {
          alert("Please enter firstname")
         }
         else if(lastName == "")
         {
          alert("Please enter lastname")
         }
         else if(email == "")
         {
          alert("Please enter email")
         }
         else if(password == "")
         {
          alert("Please enter password")
         }
         else if(confirmPassword == "")
         {
          alert("Please enter confirm password")
         }
         else if(password !== confirmPassword)
         {
          alert("Please match the password field")
         }
         else 
         {
          return createUser({firstName:firstName,lastName:lastName,password:password,email:email})
         }
    }

return <CartContext.Provider value={{dataAdded,totalPrice,addTotalPrice,removeAllCart,modeActive,mode,
  toggleName,cart,addToCart,removeCart,email,setEmail,firstName,setFirstName,lastName,setLastName,password,setPassword,confirmPassword,setConfirmPassword,signup,login,setToggleName}}>
       {children}
    </CartContext.Provider>
  
  
}

