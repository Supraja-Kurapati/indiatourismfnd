import React, { useEffect,useState } from 'react'
import SlideSlider from '../Slider'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const South = () => {

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
        <h3>South India Tour Packages </h3>
<p className='Font-Small justify'>

	
	
<a href="https://www.theindiatourism.com/south-india-tours/index.html">South India Tours</a> online offers a large variety of South India. Scroll through the list of tour packages below, and you will find tour packages covering almost every important destination in Southern India. Southern India is famed for it’s temples, it’s architecture and it’s rich <a href="https://www.theindiatourism.com/south-india-tours/south-india-cultural-tour.html">cultural heritage.</a> We have several tour packages that include Southern India’s best known tourism destinations like <b>Chennai, Mahabalipuram, Mysore</b> etc. Specialized in tailor-made South India tours encompass states like Andhra Pradesh, <a href="https://www.theindiatourism.com/south-india-tours/south-india-with-kerala-tour.html">Kerala,</a> <b>Tamil Nadu</b> and <b>Karnataka.</b> The states come under southern India speak their own state's official languages like Kannad, Malayalam, Telgu and Tamil etc. Surrounded by the Bay of Bengal, Arabian Sea and Indian Ocean from East, West and South respectively, South India is blessed with unlimited tourism attractions like <b>Wildlife</b> sanctuaries, <a href="https://www.theindiatourism.com/south-india-tours/south-india-beaches-tour.html">Beaches,</a>. <b>Hill stations,</b> Churches, Temples, <b>Fair and Festivals</b> and Houseboat stay in Backwaters.


	
</p>

<div className='EntireCardWrapper'>

{
  PData.filter((pack)=>pack.heading.includes('South India Tours')).map((pack)=>(
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

export default South