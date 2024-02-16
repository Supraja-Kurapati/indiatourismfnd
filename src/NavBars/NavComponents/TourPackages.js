import React,{useEffect,useState} from 'react'
import SlideSlider from '../../Slider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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

      const [TData,setTData]=useState([])

      useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await axios.get('https://indiatourismbknd.onrender.com/pages/packages')
            setTData(response.data)
          }
          catch(err){
            console.log(err);
          }
        }
        fetchData()
      },[])
    

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

  <div className='EntireCardWrapper'>
  {
  TData.map((item)=>(
  
    <div key={item.id} className='CardWrapper'>
      {/* <NavLink to={`/stateIndividual/${item.id}`}> */}
{/* <NavLink to='/stateIndividual'> */}

      <img src={item.img} alt='Not Found' className='CardImgWrapper'/>
      <h2 className='Font-vSmall'>{item.heading}</h2>
      {/* </NavLink> */}
      {/* </NavLink> */}
      </div> 
      
  ))
 }
  </div>     


    </div>
    </div>
    </div>
  )
}

export default TourPackages