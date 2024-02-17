import React from 'react'
import SlideSlider from '../Slider'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const BudgetTours = () => {
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
        <h3>Budget India Tour Packages </h3>
<p className='Font-Small justify'>

	
  <b>Budget tour packages</b> we can customize the tour packages in India as per client requirements. we always like to deliver the best in limited budget. so you can book your best <b>budget tour packages India.</b> All this is done to break the pre-existent notions that <b>travelling</b> is expensive and make a trip affordable in every way possible without any compromise. Each <b>itinerary</b> is planned with creativity to fulfil the purpose of being under the budget.<br/>
  The people who choose such affordable tours are generally the ones who expect the best quality and maximum returns on their <b>trip</b> cost. For such demands, India Tour has worked out special <b>budget trips</b> that fulfil their purpose and save the money in the tours.
  
  
    
</p>
<div className='EntireCardWrapper'>
{
  PData.filter((pack)=>pack.heading.includes('Budget India Tours')).map((pack)=>(
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

export default BudgetTours