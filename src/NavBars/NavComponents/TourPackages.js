import React,{useEffect} from 'react'
import SlideSlider from '../../Slider'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
const TourPackages = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    const token=localStorage.getItem('token')
    console.log(token);
    if(!token){
      navigate('/login')
    alert('You have not logged in..')
    }
    else{
      axios.get('https://indiatourismbknd.onrender.com/pages/TourOffers',{
        headers: {
          authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
      },[navigate])

      // const [TData,setTData]=useState([])

      // useEffect(()=>{
      //   const fetchData=async()=>{
      //     try{
      //       const response=await axios.get('https://indiatourismbknd.onrender.com/pages/packages')
      //       setTData(response.data)
      //     }
      //     catch(err){
      //       console.log(err);
      //     }
      //   }
      //   fetchData()
      // },[])
    

  return (
      <div className='HomeWrapper'>
      <div className='Slider'>
<SlideSlider/>
      </div>

        <div className='EntireTextWrapper'>
        <div className='TotalTextContainer'>
          <h3>India Tour Packages By Themes</h3> 
          <p className='Font-medium justify'>

<b>India Tours</b> is one of the most beautiful countries in the world, and to explore it fully <b>holiday packages</b> in India such as these can be availed. To better understand and experience India’s geographical and cultural diversity, there is a wide range of <b>India tour packages</b> for travelers to pick from. Varying from destination to destination, these domestic tour packages in India take you for a relaxing vacation to beautiful hill-stations, quaint towns, cosmopolitan metros, and amazing beach cities. Choose to relax for a few days, or enjoy adventure packed tours of India, the choice is yours. Exploring India is an easy task if you can choose the right tour packages in India. You can choose a tour according to the different <b>themes, destinations,</b> durations or interests. You will get some incredible variations and it will be an amazing vacation for you, without a doubt! Be it a relaxed holiday in one of the <b>hill stations,</b> an adventurous one in a beach destination, a calming one in the backwaters or a thrilling one in a <b>wildlife sanctuary,</b> you will find it all. You can behold the best of ethnic history in the havelis of Rajasthan or get the best of your spiritual inclination at the various temples in the Southern India. The snow-capped mountains in the Himalayan range is sure to give you the chills and the huge coastline of numerous, picturesque beaches will simply take your breath away! Browse through our specially-crafted list of <b>India holiday packages</b> below to find your preferred trip. Think of India and we cater to your interests or we can help you <b>customize your trip. </b>
  </p>
  <div className='DynamicWrapper'> 


   <div className='CardWrapper'>
    <NavLink to='/golden' target="_blank">
   <img src='https://www.theindiatourism.com/images/golden-triangle-tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Golden Triangle Tours</h2>
   </NavLink>
   </div>
   <div className='CardWrapper'>
   <NavLink to='/honeymoon'>
   <img src='https://www.theindiatourism.com/images/india-Honeymoon-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Honey Moon Tours</h2>
   </NavLink>
   </div>
   <div className='CardWrapper'>
   <NavLink to='/family'>
   <img src='https://www.theindiatourism.com/images/Family-Holidays.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Family Holidays Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
   <NavLink to='/pili'>
   <img src='https://www.theindiatourism.com/images/Pilgrimage-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Piligrimage Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
   <NavLink to='/adventure'>

   <img src='https://www.theindiatourism.com/images/Adventure-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Adventure Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
   <NavLink to='/budget'>

   <img src='https://www.theindiatourism.com/images/Budget-Tour-India.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Budget India Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
    <NavLink to='/luxury'>
   <img src='https://www.theindiatourism.com/images/India-Luxury-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>India Luxury Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
   <NavLink to='/solo'>
   <img src='https://www.theindiatourism.com/images/Solo-Woman-India-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Solo Woman India Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
    <NavLink to='/north'>
   <img src='https://www.theindiatourism.com/images/North-India-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>North India Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
    <NavLink to='/south'>
   <img src='https://www.theindiatourism.com/images/South-India-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>South India Tours</h2>
   </NavLink> </div>

   <div className='CardWrapper'>
   <NavLink to='/shopping'>

   <img src='https://www.theindiatourism.com/images/India-Shopping-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>India Shopping Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
   <NavLink to='/food'>

   <img src='https://www.theindiatourism.com/images/India-Food-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>India Food Tours</h2>
   </NavLink></div>



   </div>


    </div>
    </div>
    </div>
  )
}

export default TourPackages