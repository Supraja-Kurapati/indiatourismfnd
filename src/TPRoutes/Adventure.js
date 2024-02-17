import React, { useEffect,useState } from 'react'
import SlideSlider from '../Slider'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Adventure = () => {
  const location=useLocation()
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

  },[location.pathname])
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
<SlideSlider/>
    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
        <h3>Adventurous Tour Packages </h3>
<p className='Font-Small justify'>

India is a big center of most popular <b>adventure activities</b> that offers wonderful prospects for adventure tourism all across the world.
Manali, a beautiful well-known <a href="https://www.theindiatourism.com/india-adventure-tours/index.html">hill station</a> of Himachal Pradesh, is a perfect place to enjoy a number of adventure sports such as fishing, white water rafting, paragliding, skiing, mountaineering, hiking and a few more. Uttarakhand, Himachal Pradesh, <b><a href="https://www.theindiatourism.com/india-adventure-tours/leh-ladakh-bike-trip-packages.html">Jammu &amp; Kashmir, Sikkim,</a></b> Upper fringes of North Eastern Himalayan ranges are main adventure spots in India. Other thrilling adventure sports in India are scuba diving, surfing through Arabian Sea and Bay of Bengal. Some of the best treks in the world, which are elaborated in our India adventure tours. <a href="https://www.theindiatourism.com/india-adventure-tours/himalayan-jeep-safari-tour.html">Jeep safaris</a> to deep jungles as well as high mountains, <b>biking</b> on winding roads of mountains or along tropical beaches of <b>Goa,</b> <b>elephant safaris</b> to some of the most celebrated tiger reserves &amp; national parks in India can all be included in your adventure trip during your Indian Adventure Tours.<br/>
<br/>
<b>ANGLING:</b><br/>
India is an angler's paradise. This sport has existed from the days of British Raj, Anglingthough not as popular as it is around the world, is gathering momentum very fast. The wide variety of fishes, innumerable fresh water streams and beautiful countryside as backdrop provide a perfect ambience to attract tourist for Angling. Angling in India can be conveniently classified into:<br/>
<br/>
<b>Mahseer (Barbus Tor) fishing:</b> The Barbus Tor, popularly called the Mahseer or the Tiger of the Indian Rivers, is one of the largest freshwater fish and one of the greatest fighting fish in the world. It is natural to Indian lakes and streams and can attain sizes upto 5.5 ft and weigh over 50 kgs. Mahseer is generally found in the rivers of the Terai regions of the Himalayas, the Shivalik Hills in the north, and the river Kaveri in the south, where it has been fished for successfully with rod and line. The areas where angling for Mahseer can be profitably pursued.<br/>
<br/>
<b>Trout fishing:</b> Unlike the Mahseer, the Trout is not indigenous to Indian waters. The Snow Trout is however fond in all high altitude streams and lakes. It was introduced into various predetermined lakes and river in various parts of the country. Trout hatcheries are in operation in the Kashmir valley, Kullu valley. Agoda near Uttrakashi and Avalanche in the Nilgiris. The Snow Trout is however, touch in all high altitude streams and lakes.<br/>
<br/>
<b>Sea fishing:</b> Sea fishing as a sport has not bet been well developed in India. But there is a good variety of game fish off the coasts of India like Baracuda, Mullet, Perch, Tuna, Marlin, Blue Marlin, Sail Fish and Sear. So the enterprising angler can put together a rewarding and memorable trip in some very exotic regions of India. <br/>
<br/>
<b> Mountaineering, Trekking and Rock Climbing</b><br/>
The main attraction of the summer months in the Himalayan states is trekking and mountain climbing. Trekkers, without any prior experience, can easily manage the altitudes the range from 2500 to 4000 meters above sea level in the hilly areas of Jammu and Kashmir, Himachal Pradesh, Uttar Pradesh and Sikkim. In Ladakh, the Nun Kun Massif, The Zanskar group, The central Himalayas, Arunachal Pradesh, Nanda devi, Kamet and Dunagiri offer challenging peaks for mountaineering.<br/>
<br/>
<b>SAFARIS</b><br/>
The Indian Himalayas is prime Safari in India, be it on a jeep, a bike, cycle or an elephant!! And can well be described as one of the last travel frontiers on earth!<br/>
<br/>
<b>SNOW SPORTS</b><br/>
Winter sports in India are centered around Kashmir, Uttar Pradesh and Himachal Pradesh. Skiing usually starts by the end of DECEMBER and lasts till the end of MARCH. Gulmarg in Kashmir, Auli in Uttar Pradesh and Manali in Himachal Pradesh provide good snow ski slopes. Heli skiing in Manali and Gulmarg provides an enormous varieties of ski runs and routes.<br/>
<br/>
<b>WATER SPORTS</b><br/>
India's coastal states are good for water sports during OCTOBER and MARCH. Goa is blend d serenity and excitement down a 10km coastline studded with some of the world's most beautiful beaches. Lakshadweep offers excellent wind surfing, Snorkeling and Scuba diving in the crystal clear waters of the lagoons which surround each island. 




	
</p>

<div className='EntireCardWrapper'>

{
  PData.filter((pack)=>pack.heading.includes('Adventure Tours')).map((pack)=>(
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

export default Adventure