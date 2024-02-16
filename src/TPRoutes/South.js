import React, { useEffect } from 'react'
import SlideSlider from '../Slider'
import { useLocation } from 'react-router-dom'
const South = () => {
  const loc=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
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
<p>
	
	
<a href="https://www.theindiatourism.com/south-india-tours/index.html">South India Tours</a> online offers a large variety of South India. Scroll through the list of tour packages below, and you will find tour packages covering almost every important destination in Southern India. Southern India is famed for it’s temples, it’s architecture and it’s rich <a href="https://www.theindiatourism.com/south-india-tours/south-india-cultural-tour.html">cultural heritage.</a> We have several tour packages that include Southern India’s best known tourism destinations like <b>Chennai, Mahabalipuram, Mysore</b> etc. Specialized in tailor-made South India tours encompass states like Andhra Pradesh, <a href="https://www.theindiatourism.com/south-india-tours/south-india-with-kerala-tour.html">Kerala,</a> <b>Tamil Nadu</b> and <b>Karnataka.</b> The states come under southern India speak their own state's official languages like Kannad, Malayalam, Telgu and Tamil etc. Surrounded by the Bay of Bengal, Arabian Sea and Indian Ocean from East, West and South respectively, South India is blessed with unlimited tourism attractions like <b>Wildlife</b> sanctuaries, <a href="https://www.theindiatourism.com/south-india-tours/south-india-beaches-tour.html">Beaches,</a>. <b>Hill stations,</b> Churches, Temples, <b>Fair and Festivals</b> and Houseboat stay in Backwaters.


	</p>
</p>
</div>
</div>
</div>
  )
}

export default South