import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import temple from './SlidingImages/architecture-color-holy-beautiful-detail.jpg'
import imgtwo from './SlidingImages/39369.jpg'
import imgthr from './SlidingImages/india-gate-mornings.jpg'
import imgfour from './SlidingImages/tourists-take-boat-ban-rak-thai-village-mae-hong-son-province-thailand.jpg'
import imgfive from './SlidingImages/2935.jpg'
const SlideSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover: false
      };
  return (
    <div className='parentSlider'>
<div className='ChildSliding'>
     <Slider {...settings}>
     
     <div>
        <img src={temple} alt='NotFound' className='Sliding'/>
     </div>
     <div>
        <img src={imgtwo} alt='NotFound' className='Sliding'/>
     </div>
     <div>
        <img src={imgthr} alt='NotFound' className='Sliding'/>
     </div>
     <div>
        <img src={imgfour} alt='NotFound' className='Sliding'/>
     </div>
     <div>
        <img src={imgfive} alt='NotFound' className='Sliding'/>
     </div>


     </Slider>
     </div>
     </div>

  )
}

export default SlideSlider