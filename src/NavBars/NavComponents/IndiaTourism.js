import React, { useState,useEffect } from 'react'
import SlideSlider from '../../Slider'
import axios from 'axios'
 import { NavLink } from 'react-router-dom'

const IndiaTourism = () => {
  const [TData,setTData]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get('http://localhost:5031/pages/tourPacakges')
        setTData(response.data)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData()
  },[])
  return (
    <div className='HomeWrapper'>
      <div className='Slider'>
<SlideSlider/>
      </div>

        <div className='EntireTextWrapper'>
        <div className='TotalTextContainer'>
          <h3>Tourism of India</h3> 
          <p className='Font-medium justify'>

India Tourism, <b>Himachal Pradesh, Kerala, Goa, Madhya Pradesh, Gujarat, Maharashtra</b> along with a few others are some of the best <b>places to visit</b> in India. With a variety of attractions, these places urge you to travel to your heart's content. And, whatever you are going to explore, will surely leave a long-lasting impression on you. 
<b>Beaches, backwaters</b>, vast stretches of <b>deserts</b>, snow-laden peaks and Indian <b>wildlife sanctuaries</b> make the country one of the best winter destinations. Tourism India during the winter season are perfect ways of bidding farewell to the previous year and welcoming the new one excitingly.
 When the sun starts shining brightly, people throng the picturesque hill stations with snow-laden peaks. A perfect escape from the scorching heat and soaring temperature can be found only in India.

  </p>


  <div className='EntireCardWrapper'>
  {
  TData.map((item)=>(
    <div key={item.id} className='CardWrapper'>
      {/* <NavLink to={`/stateIndividual/${item.id}`}> */}
<NavLink to='/stateIndividual'>
      <img src={item.imagesrc} alt='Not Found' className='CardImgWrapper'/>
      <h2 className='Font-vSmall'>{item.heading}</h2>
      </NavLink>
      {/* </NavLink> */}
      </div> 
  ))
 }
  </div>     
</div>

</div>
    </div>
  )
}

export default IndiaTourism