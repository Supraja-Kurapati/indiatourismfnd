import React from 'react'
 import fb from './Images/facebook.png'
 import insta from './Images/instagram.png'
 import linkedin from './Images/linkedin.png'
import SlideSlider from '../../Slider'
const ContactUs=()=>{
    return(
       
    <div className='HomeWrapper'>
    <div className='Slider'>
      <SlideSlider/>
    </div>
    <div className='EntireTextWrapper'>
    <div className='TotalTextContainer'>
    <h3>Contact Us</h3>
    <p className='Font-medium justify'>Thank you for showing your interest in The India Tourism Tour & Travel services. Please provide the information about your tour requirements in order to help us to serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 24 hours.</p>
     <br/>
     <div className='ParentContainer'>
    <div className='ContainerOne'>
     <h2>The India Tourism</h2>
     <h2 style={{color:'brown'}}>Supraja Kurapati</h2>
     <img style={{color:'brown'}} src='https://www.theindiatourism.com/images/wa-logo.png' alt='WhatsApp: '/> <span style={{color:'brown'}}>+91 6309821337</span> 
     <h2>Office Hours:(9:30 am to 5:30 pm)</h2>
     <p  className='Font-Small' style={{color:'brown'}}     onClick={()=>window.location='mailto:suprajakurapati8@gmail.com'}  >Email:info@theindiatourism.com</p>

     </div>

     <div className='ContainerTwo'>
        <img src='https://www.theindiatourism.com/images/paypal.png' alt='Paypal' />
     </div>
     <div className='ContainerThree'>
        <h3>Follow Us</h3>
        <div className='FollowsImgs'>
          <a href='www.facebook.com'> <img src={fb} alt='Fb' id='contImg'/></a>
          <a href='www.instagram.com'> <img src={insta} alt='instagram' id='contImg'/></a>
         <a href='www.linkedin.com'>  <img src={linkedin} alt='linkedin' id='contImg'/></a>
        </div>
        <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.png' alt='Athithi DevoBhava'/>

     </div>

     </div>
        </div>
        </div>
        </div>
    )
}
export default ContactUs