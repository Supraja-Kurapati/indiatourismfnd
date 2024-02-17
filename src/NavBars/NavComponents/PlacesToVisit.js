import React from 'react'
import SlideSlider from '../../Slider'
import { NavLink } from 'react-router-dom'

const PlacesToVisit = () => {
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
      <SlideSlider/>
    </div>
    <div className='EntireTextWrapper'>
    <div className='TotalTextContainer'>
<h3>Top Tourist Destinations in India</h3>

<p className='Font-medium justify'>

<b>Top Tourist Destination India</b> is the home to numerous attractions, amenities, activities and beauties. It is not hard to believe that a land as diverse as India has a long list of travel destinations within its border. Starting from the valleys of <b>Kashmir</b> to the tri-colored sea of <b>Kanchipuram</b>, you will find numerous tourist attractions, which would suit your taste. If you were visiting India in winter, <b>Rajasthan</b>, <b>Agra</b>, <b>Maharashtra</b>, <b>Tamil Nadu</b>, <b>Kerala</b>, <b>Chandigarh</b>, <b>Karnataka</b>, Goa and other places would be in the top choice. If you choose to visit India in the monsoon, <b>Uttarakhand</b>, <b>Munnar</b>, <b>Mussorie</b>, <b>Cherrapunji</b> and Coorg are some of the places to choose. 
  </p>

  <div className='EntirePlacesWrapper'>
    <div className='visitWrapper'>
      <h3>Andhra Pradesh Tourism</h3>
      <img src='https://www.theindiatourism.com/images/Destination-Andhra-Pradesh.jpg' alt='Not Found' className='CardImgWrapper'/>
      <h3><NavLink to='/placesofstate/1'>.Kalahasti Temple</NavLink></h3>
      <h3><NavLink to='/placesofstate/2'>.Yaganti Caves</NavLink></h3>
      <h3><NavLink to='/placesofstate/5'>.Ananthagiri Hills</NavLink></h3>
      <h3><NavLink to='/placesofstate/6'>.Araku Valley</NavLink></h3>
      <h4><NavLink to='/stateIndividual/1'> View All</NavLink></h4>

    </div>

    <div className='visitWrapper'>
      <h3>Arunachal Pradesh Tourism</h3>
     <img src='https://www.theindiatourism.com/images/tourism-arunachal-pradesh.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/9'>.Itanagar</NavLink></h3>
     <h3><NavLink to='/placesofstate/10'>.Bomdila</NavLink></h3>
     <h3><NavLink to='/placesofstate/11'>.Tawang</NavLink></h3>
     <h3><NavLink to='/placesofstate/12'>.Parasuram kund</NavLink></h3>
     <h4><NavLink to='/stateIndividual/2'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Assam Tourism</h3>
     <img src='https://www.theindiatourism.com/images/Top-destination-Assam.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/17'>.Guwahati</NavLink></h3>
     <h3><NavLink to='/placesofstate/18'>.Majuli Island</NavLink></h3>
     <h3><NavLink to='/placesofstate/19'>.kaziranga Nationalpark</NavLink></h3>
     <h3><NavLink to='/placesofstate/21'>.Tejpur</NavLink></h3>
     <h4><NavLink to='/stateIndividual/3'> View All</NavLink></h4>

    </div>

    <div className='visitWrapper'>
      <h3>Bihar Tourism</h3>
     <img src='https://www.theindiatourism.com/images/Bihar-tourist.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/25'>.Bodhgaya</NavLink></h3>
     <h3><NavLink to='/placesofstate/26'>.Patna</NavLink></h3>
     <h3><NavLink to='/placesofstate/27'>.Rajgir</NavLink></h3>
     <h3><NavLink to='/placesofstate/29'>.Nalanda</NavLink></h3>
     <h4><NavLink to='/stateIndividual/4'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Chattisgarh Tourism</h3>
     <img src='https://www.theindiatourism.com/images/Destination-Chhattisgarh.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/33'>.Mahamaya Temple</NavLink></h3>
     <h3><NavLink to='/placesofstate/34'>.Bambleshwari Temple</NavLink></h3>
     <h3><NavLink to='/placesofstate/36'>.Bhoramdeo Temple</NavLink></h3>
     <h3><NavLink to='/placesofstate/37'>.Achanakmar Wildlife</NavLink></h3>
     <h4><NavLink to='/stateIndividual/5'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Goa Tourism</h3>
     <img src='https://www.theindiatourism.com/images/goa-tour.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/41'>.Aguoada Fort</NavLink></h3>
     <h3><NavLink to='/placesofstate/42'>.DhudhSagar Waterfalls</NavLink></h3>
     <h3><NavLink to='/placesofstate/43'>.Baga Beach</NavLink></h3>
     <h3><NavLink to='/placesofstate/45'>.Anjuna Beach</NavLink></h3>
     <h4><NavLink to='/stateIndividual/6'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Gujarat Tourism</h3>
     <img src='https://www.theindiatourism.com/images/Gujarat-destination.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/49'>.Rani-ki-vav</NavLink></h3>
     <h3><NavLink to='/placesofstate/50'>.Gir National Park</NavLink></h3>
     <h3><NavLink to='/placesofstate/51'>.Dwarakadish Temple</NavLink></h3>
     <h3><NavLink to='/placesofstate/52'>.Rann of Kutch</NavLink></h3>
     <h4><NavLink to='/stateIndividual/7'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Haryana Tourism</h3>
     <img src='https://www.theindiatourism.com/images/Haryana-destination.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/57'>.Gurugram</NavLink></h3>
     <h3><NavLink to='/placesofstate/58'>.Kurukshetra</NavLink></h3>
     <h3><NavLink to='/placesofstate/59'>.panchkula</NavLink></h3>
     <h3><NavLink to='/placesofstate/60'>.Faridabad</NavLink></h3>
     <h4><NavLink to='/stateIndividual/8'> View All</NavLink></h4>
    </div>

    {/* <div className='visitWrapper'>
      <h3> Tourism</h3>
     <img src='' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/65'>.</NavLink></h3>
     <h3><NavLink to='/placesofstate/58'>.</NavLink></h3>
     <h3><NavLink to='/placesofstate/59'>.</NavLink></h3>
     <h3><NavLink to='/placesofstate/60'>.</NavLink></h3>
     <h4><NavLink to='/stateIndividual/8'> View All</NavLink></h4>
    </div> */}




  </div>

    </div>
    </div>

    </div>
  )
}

export default PlacesToVisit