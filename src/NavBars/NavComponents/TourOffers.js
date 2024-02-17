import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
import SlideSlider from '../../Slider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const TourOffers = () => {
  const [TData,setTData]=useState([])

  const navigate=useNavigate()
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get('https://indiatourismbknd.onrender.com/pages/tourPacakges')
        setTData(response.data)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData()

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

  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
      <SlideSlider/>
    </div>
    <div className='EntireTextWrapper'>
    <div className='TotalTextContainer'>
    <h3>India Special Offer Tour Packages</h3>
    <p className='Font-medium justify'>


<b>India Special Offer Tour</b> contains the particularly special experience of India. Such as <b>Luxury Tours,</b> Pilgrimage tours for all the religion people, <b>Festival tours</b> of India etc. <b>Do Dham, char Dham,</b> Hemkund Saheb, Ponta Saheb, Yamnotri, Gangotri, Kedarnath, Badrinath, Mosque &amp; Dargah tours under Piligrimage tour. Festivals of North East, <b>Ladakh,</b> Rajasthan etc are very popular among the tourist. We also orgainise tour for some particular interest like short trekking in the Himalayan region, <b>camel safari</b> in Rajasthan, <b>Honeymoon tours,</b> trout fishing in the still lakes of Himalayan valleys, house boat holidays in <b>Kerala</b> or <b>Kashmir,</b> White water rafting on Ganges and other rivers and so on. Create memoirs that last a lifetime by exploring the much admired places of India. We tender affordable and attractive <b>India Tour Packages</b> to suit the needs of every tourist. Choosing any of these <b>holiday packages</b> will provide you with wholesome experiences that you will love to treasure with your friends in joyful time.


  </p>

  <div className='DynamicWrapper'> 
  <div className='CardWrapper'>
   <NavLink to='/pili'>
   <img src='https://www.theindiatourism.com/images/Pilgrimage-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Piligrimage Tours</h2>
   </NavLink></div>


   {
  TData.filter((e)=>e.id%8===0).map((item)=>(
  
    <div key={item.id} className='CardWrapper'>
      <NavLink to={`/stateIndividual/${item.id}`}>
{/* <NavLink to='/stateIndividual'> */}

      <img src={item.imagesrc} alt='Not Found' className='CardImgWrapper'/>
      <h2 className='Font-vSmall'>{item.heading}</h2>
      </NavLink>
      {/* </NavLink> */}
      </div> 
      
  ))
 }
   <div className='CardWrapper'>
   <NavLink to='/adventure'>

   <img src='https://www.theindiatourism.com/images/Adventure-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Adventure Tours</h2>
   </NavLink></div>




</div>

</div>
</div>
</div>
 )
}

export default TourOffers