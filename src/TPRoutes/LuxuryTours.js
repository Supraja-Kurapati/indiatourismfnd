import React, { useEffect,useState } from 'react'
import SlideSlider from './../Slider';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const LuxuryTours = () => {
  const [PData,setPData]=useState([])

  const loc=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
    const getData=async()=>{
      try{
        const response=await axios.get('https://indiatourismbknd.onrender.com/pages/packs')
        setPData(response.data)
        // console.log(response.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getData()

  },[loc.pathname])
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
<SlideSlider/>
    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
        <h3>India Luxury Tour Packages </h3>
<p className='Font-Small justify'>

	
	<b>India Luxury Tours</b> to India is one of the most sought after travel segment. India has emerged as a fast-growing <b>luxury destination</b> on the world map from the past few years. The variety that India has to offer in its landscape, culture, traditions, cuisine and in many other things, is rarely found in any other part of the world. the <a href="https://www.theindiatourism.com/india-luxury-tour-packages/index.html">luxury tour packages</a> are planned keeping in mind the taste and needs of the tourists. The trip is a meticulous work that incorporates all the major Indian attractions. Under these packages guests get to explore traditional fairs, forts, beaches, colorful festivals, ancient temples and the cruises etc. Enjoy Luxury tours in India as you holiday in a elapsed era sated with <b>luxurious heritage</b> in forts and palaces of Rajasthan or have a thrilled experience in the backwoods of Ranthambhore or in a lethargic mood in <b>Goa</b> or in the backwaters of <a href="https://www.theindiatourism.com/india-luxury-tour-packages/kerala-luxury-packages.html">Kerala.</a>

	
</p>
<div className='EntireCardWrapper'>
{
  PData.filter((pack)=>pack.heading.includes('India Luxury Tours')).map((pack)=>(
    <div key={pack.id} className='CardWrapper'>
<NavLink to={`/itp/${pack.id}`}>

      <img src={pack.img} alt={pack.img} className='CardImgWrapper'/>
     <h2 className='Font-vSmall'> {pack.head}</h2>
     </NavLink>
      </div>
  ))
}
</div>

</div>
</div>
</div>
  )
}

export default LuxuryTours