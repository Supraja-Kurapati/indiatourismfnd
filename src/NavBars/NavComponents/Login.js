import React, { useState } from 'react'
import LoginSide from './Images/39369.jpg'
import { NavLink } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
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

          <button className='LoginBtn'>Login</button>
         
         <br/><br/>

         <h2>Don't Have Account?<NavLink to='/register'>   SignUp❕</NavLink></h2>
        </div>
      </div>
    </div>
  )
}

export default Login