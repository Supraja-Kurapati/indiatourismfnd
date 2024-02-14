import React, { useState } from 'react'
import LoginSide from './Images/39369.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()
const handleLogin=()=>{
  try{
    const res= axios.post('https://indiatourismbknd.onrender.com/pages/login',{email,password})
    .then((res)=>{
      console.log(res.data,"User Logged In Data");

      if(res.data.msg==="Login Successful!"){
        console.log("login success")
        alert(res.data.msg)
        localStorage.setItem("token",res.data.token)
        setTimeout(() => {
          navigate('/')
        }, 1000);
  
      }
      else{
        alert("PassWord Incorrect")
      }
     if(res.data.msg==="You Haven't Registered Yet"){
      alert("you Haven't Registered Yet")
      setTimeout(() => {
        navigate('/register')
      }, 3000);
     }
    })
    console.log(res.data,"Response Data")

  }
  catch(err){
    console.log(err,"error in axios")
  }

}

  return (
    <div className='LoginWrapper'>
     <div className='LoginIMG'>
     <img src={LoginSide} alt='Login' id='LoginIMG'/>
     </div> 

      <div className='LoginDetailsWrapper'>
        <div className='DetailsBox'>
          <input type='email' value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
          <br/><br/>
          <input type='password' value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
          <br/><br/>

          <button className='LoginBtn' onClick={handleLogin}>Login</button>
         
         <br/><br/>

         <h2>Don't Have Account?<NavLink to='/register'>   SignUp❕</NavLink></h2>
        </div>
      </div>
    </div>
  )
}

export default Login