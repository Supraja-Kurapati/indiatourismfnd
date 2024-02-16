import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import SlideSlider from '../Slider';
const PlacesofState = () => {
    const individualid=useParams().id;
    const [PData,setPData]=useState([])
    const location=useLocation()
    useEffect(()=>{
      window.scrollTo(0,0)
        const fetchData=async()=>{
            try{
                const response=await axios.get('https://indiatourismbknd.onrender.com/pages/places')
                setPData(response.data)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[location.pathname])
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
<SlideSlider/>
    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
     {
        PData.filter((place)=>place.id===parseInt(individualid)).map((place,index)=>(
            <div key={place.id}>
                 <h3>{place.place}</h3>
                 <p className='justify Font-medium'>
                  {place.Description}
                  <br/>                  <br/>

                  {place.ptwo}
                  <br/>                  <br/>

                  {place.pthree}
                </p>

                <h3>Things to See in {place.heading.replace("Tourism","")}</h3>
<br/>

                </div>
        ))
     }
     </div>
{/* {
    PData.filter((place)=>place.heading===place.heading).map((place)=>
     <div key={place.id} className='CardWrapper'>
     <img src={place.imagesrc} alt='Not Found' className='CardImgWrapper'/>
      <h2 className='Font-vSmall'>{place.place}</h2>
 
</div>
)
} */}
     </div>


</div>
  )
}

export default PlacesofState