import React, { useEffect } from 'react'
import SlideSlider from '../Slider'
import { useLocation } from 'react-router-dom'
const GoldenTour = () => {
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
    <h3>Golden Triangle Tour</h3>
<p className='Font-Small justify'>
	India's <b>golden triangle</b> is a tourist circuit which connects the national capital <b><a href="https://www.theindiatourism.com/golden-triangle-tours-india/golden-triangle-tour.html">Delhi,</a></b> <b>Agra</b> and <b>Jaipur.</b> The Golden Triangle is so called because of the triangular shape formed by the locations of New Delhi, Agra and Rajasthan on a map. But now <a href="https://www.theindiatourism.com/golden-triangle-tours-india/golden-triangle-with-amritsar-tour.html">Amritsar</a> is emerging as fourth angle of this triangle. The trips usually start in Delhi moving south to the site of <b>Taj Mahal</b> at Agra, then west, to the desert landscapes of Rajasthan. It is normally possible to do the trip by coach or private journey through most tour operators. The Golden Triangle is now a well traveled route providing a good spectrum of the country's different landscapes. The circuit is about 720 km by road. Each leg is about 4 to 6 hours of drive. The Shatabdi express train also connects Delhi with Agra and Jaipur. 
Golden triangle India welcome tourists to best of Indian Destinations that will make your journey memorable. So, if you want to taste the culture and religion of India, <a href="https://www.theindiatourism.com/golden-triangle-tours-india/index.html">golden triangle package</a> is the good choice for you.<br/>
<b>The India Tourism</b> clubbed this Golden Triangle Tour with many splendid places of India like Amritsar, <a href="https://www.theindiatourism.com/india-tours/goa-tour-packages.html">Goa,</a> <a href="https://www.theindiatourism.com/kerala-tour-packages/index.html">Kerala,</a> Varanasi, Himachal, <a href="https://www.theindiatourism.com/places-to-visit/khajuraho-tourism.html">Khajuraho</a> and many more. Then still what are you thinking, set forth on any Golden Triangle Tour &amp; nearby Destination Packages listed below and enjoy a rich holiday experience in India. If you still haven’t found the right tour that you were looking for, email us or talk to our dedicated tour consultants who will be happy to tailor-make one for you.
</p>
</div>
    </div>
</div>
  )
}

export default GoldenTour