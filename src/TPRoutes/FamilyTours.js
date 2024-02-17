import React from 'react'
import SlideSlider from '../Slider'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const FamilyTours = () => {
  const [PData,setPData]=useState([])

  const location=useLocation()
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
  },[location.pathname])

  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
<SlideSlider/>
    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
        <h3>Family Tour Packages </h3>
<p className='Font-Small justify'>
	
	
	<b><a href="https://www.theindiatourism.com/family-holidays-india-tours/family-hill-stations-india-tour.html">Family Holidays</a></b> in India including a variety of memorable experiences, destinations and attractions, which harmonizes with the preferences of family members with different tastes. Travel to popular <b>hill stations</b> like <b>Darjeeling, Shimla, Nainital, Ooty, Sikkim, Munnar, Mussoorie</b> etc. or choose offbeat places like Majuli Island, Khajjiar, or kasol India never fails to amuse you with something or the other special. Go for <b>desert safari</b> amidst sand dunes in <b>Jaisalmer.</b> Explore the wilderness at well-known national parks in India. Your tours to India include all these and much more.

</p>
<div className='EntireCardWrapper'>
{
  PData.filter((pack)=>pack.heading.includes('Family Holidays Tours')).map((pack)=>(
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

export default FamilyTours