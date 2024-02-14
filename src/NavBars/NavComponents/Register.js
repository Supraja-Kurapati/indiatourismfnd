import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const handleRegister=()=>{
        try{
        const res=axios.post('https://indiatourismbknd.onrender.com/register',{firstname,lastname,email,password})
        .then((res)=>{
            console.log(res.data,"User Registered Data")
            if(res.data.msg==="Email Already Exist"){
               alert(res.data.msg)
            }
            else{
                localStorage.setItem("token",res.data.token)
                setTimeout(async() => {
                  alert("user Registered successfully")
                //   await  navigate('/')
                }, 2000);
            }
        })
        console.log((res.data,"response data"));
    }
     catch(err){
         console.log(err,"Registration failed");
     }

    }

    


  return (
    <div className='RegisterWrapper'>
      <div className='RegDetailsWrapper'>
        <div className='form'>
         <input type='text' value={firstname} placeholder='Enter FirstName' required onChange={(e)=>setFirstname(e.target.value)}/>
         <input type='text' value={lastname} placeholder='Enter LastName' onChange={(e)=>setLastname(e.target.value)}/>
         <input type='email' value={email} placeholder='Enter Email ID' onChange={(e)=>setEmail(e.target.value)}/>
         <input type='password' value={password} placeholder='Set Your password' onChange={(e)=>setPassword(e.target.value)}/>

          <button className='RegBtn' onClick={handleRegister}>Register</button>
          <h2>  Already have Account <NavLink to='/login'>Login</NavLink></h2> 
         </div>
      </div>
    </div>
  )
}

export default Register