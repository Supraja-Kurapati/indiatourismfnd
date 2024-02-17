import React, { useEffect ,useState} from 'react'
import SlideSlider from '../Slider'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const Hm = () => {
  const loc=useLocation()
  const [PData,setPData]=useState([])

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
    <h3>Honey Moon Tours</h3>
<p className='Font-Small justify'>

	
	
Honeymoon is the time when everything would look ecstatic and <b>romantic.</b> It is not some simple vacation that is focused on <a href="https://www.theindiatourism.com/india-honeymoon-tours/romantic-hills-honeymoon-tour.html">hill station</a> destination. This is the vacation that you and your special one will remember throughout your life. Ask any of your married friends about their <b>honeymoon tour</b> and you would see their face lightening up. Rajasthan fits the bill for royal honeymoon in India. Cover historic sites, culturally-enriched places, majestic forts, palaces, temples, the <b>Thar Desert,</b> stay in heritage hotels and more. In fact, <b>Udaipur</b> is Rajasthan one of the most romantic places in the world. <b>Jaipur, Jaisalmer, Mount Abu, Bikaner, Jodhpur</b> and more are important markers of the tour. For beach bums who just want some time alone, we have several itineraries that will offer the ideal beach honeymoon in India. Popular names include <b>Goa, Kerala,</b> and Andaman, while the others are <b>Pondicherry, Alibag, Daman &amp; Diu, Lakshadweep,</b> Gokarna and so many more. Here, <b>Kerala tour packages</b> earn bonus points here, owing to its blissful spread of backwaters, hill stations, <b>wildlife</b> sanctuaries, pampering <a href="https://www.theindiatourism.com/india-honeymoon-tours/goa-honeymoon-tour.html">Ayurveda</a> sessions, culture along with the scenic beaches.

	

</p>

<div className='EntireCardWrapper'>

{
  PData.filter((pack)=>pack.heading.includes('Honey Moon Tours')).map((pack)=>(
    <div key={pack.id} className='CardWrapper'>

      <img src={pack.img} alt='Not Found' className='CardImgWrapper'/>
     <h2 className='Font-vSmall'> {pack.head}</h2>
      </div>
  ))
}
</div>



</div>
</div>
</div>
  )
}

export default Hm