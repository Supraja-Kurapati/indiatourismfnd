import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavComponents = () => {
  const [notClicked,setnotClicked]=useState(false)

  const handleMenu=()=>{
     setnotClicked(!notClicked)
  }
  return (
    <>
    <div className='NavtwoWrapper'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/indiaTourism'>India Tourism</NavLink>
        <NavLink to='/TourPackages'>Tour Packages</NavLink>
        <NavLink to='/PlacesToVisit'>Places To Visit</NavLink>
        <NavLink to='/TourOffers'>Tour Offers</NavLink>
        <NavLink to='/ContactUs'>Contact US</NavLink> 
        {/* <NavLink to='/login'>Account</NavLink> */}
    </div>
{/* For Mobile View down */}
<>
   <div className='HamburgerWrapper'>
    <div className='HamburgericonWrapper'  onClick={handleMenu}>
   <span className='burger'></span>
   <span className='burger'></span>
   <span className='burger'></span>
   </div>
   </div>
   {notClicked &&(
     <div className='NavTwoMobile'
     >         
          <NavLink to='/' className='navRoutes'>Home</NavLink> <hr/>
          <NavLink to='/indiaTourism' className='navRoutes'>India Tourism</NavLink><hr/>
          <NavLink to='/TourPackages' className='navRoutes'>Tour Packages</NavLink><hr/>
          <NavLink to='/PlacesToVisit' className='navRoutes'>Places To Visit</NavLink><hr/>
          <NavLink to='/TourOffers' className='navRoutes'>Tour Offers</NavLink><hr/>
          <NavLink to='/ContactUs' className='navRoutes'>Contact US</NavLink>  <hr/>
      </div>
      )}
          </>
</>          
  )
}

export default NavComponents