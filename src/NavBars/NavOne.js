import React from 'react'
// import userIcon from './NavComponents/Images/8380015.jpg'
import { useNavigate } from 'react-router-dom'
const NavOne = () => {
  const navigate=useNavigate()
  const handleNavigation=()=>{
    navigate('/')
  }
  return (
    <div className='NavOneWrapper'>
     <div className='ParentNav'>
         <div id='tourismimg'>
         <img src='https://www.theindiatourism.com/images/logo.webp' alt='India Tourism' className='navimg' />
         <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='Andhra Tourism' className='navimg' onClick={handleNavigation}/>

        </div>

       <div className='emailandCont Font-Small'>
       <p  className='Font-Small'      onClick={()=>window.location='mailto:suprajakurapati8@gmail.com'}  >Email:info@theindiatourism.com</p>
            <div className='ContactNav Font'>
            <img src='https://www.theindiatourism.com/images/india.webp' alt='Contact' id='contImg' onClick={() => window.open('tel:+91 630-982-1337')}/>:   6309821337</div>

            </div>  
            <div><img src= 'https://www.magnolia-cms.com/dam/jcr:46c84a0f-54ce-456c-a93b-e3a8cb2d3d0f/User-avatar.png' alt='User' id='UserImg'/></div>     

     </div>
    </div>
  )
}

export default NavOne