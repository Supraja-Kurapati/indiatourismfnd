import React, { useEffect, useState } from 'react'
import SlideSlider from '../Slider'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const North = () => {  const [PData,setPData]=useState([])

  const loc=useLocation()
  useEffect(()=>{
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

    window.scrollTo(0,0)
  },[loc.pathname])
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
<SlideSlider/>
    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
        <h3>North India Tour Packages </h3>
<p className='Font-Small justify'>

	
	
	North India tour packages, they get to experience the <b>culture, heritage,</b> traditions, and history that every corner of India relishes. North India is a destination pulsating with extraordinary attractions. Endowed with sheer natural beauty and a rich cultural heritage, <b>North India</b> beckons you for a travel experience of a lifetime. <a href="https://www.theindiatourism.com/north-india-tours/index.html">North India Tour</a> will take you to its historic, majestic and celestial destinations such as <b>Delhi, Himachal Pradesh, Jammu &amp; Kashmir, Rajasthan, Punjab, Haryana, Uttar Pradesh</b> and <b>Uttaranchal,</b> which overflow with attractions. <a href="https://www.theindiatourism.com/north-india-tours/north-india-tour-package.html">North India Tourism</a> presents you fascinating attractions like world famous Heritage sites, <b>hill stations, adventure sports, scenic beauty, cruises, wildlife</b> and <b>pilgrimage</b> sites. North India is a big hit with <a href="https://www.theindiatourism.com/north-india-tours/north-india-with-kerala-tour.html">honeymooners,</a> adventure enthusiasts and nature lovers. <b>Accommodation</b> takes a whole new meaning in North India as here the options are mind- blowing. Offering a variety of choices in terms of accommodation, North India is the place where you can stay in royal palaces and experience the lifestyles of the raja-maharajas of the bygone era. 
	
	
	With our <b>North India tour packages</b> we will take you along with us to an amazing journey, full of breathtaking experiences, to taste most unique and fabulous flavors, meet with most amazing and remarkable people and see most magnificent and exclusive sites. Get ready for one of the most memorable <a href="https://www.theindiatourism.com/north-india-tours/north-india-with-tiger-tour.html">adventures</a> of your life by choosing any of your favorite package tour.
	
	
	
</p>

<div className='EntireCardWrapper'>

{
  PData.filter((pack)=>pack.heading.includes('North India Tours')).map((pack)=>(
    <div key={pack.id} className='CardWrapper'>
<NavLink to={`/itp/${pack.id}`}>

      <img src={pack.img} alt='Not Found' className='CardImgWrapper'/>
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

export default North