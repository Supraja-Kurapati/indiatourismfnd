import React,{useEffect,useState} from 'react'
import SlideSlider from '../Slider'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
const Stateindividual = () => {

  const individualid=useParams().id;

    const [TData,setTData]=useState([])
//places of everyindividual Tourism
const [PData,setPData]=useState([])
useEffect(()=>{
  const getData=async()=>{
    try{
      const response=await axios.get('https://www.theindiatourism.com/pages/places')
      setPData(response.data)
    }
    catch(err){
      console.log(err);
    }
  }
  getData()
},[])


// console.log(individualid);

    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await axios.get('https://indiatourismbknd.onrender.com/pages/tourPacakges')
          setTData(response.data)
          // console.log(response.data);
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

    <div>
      
          {
  // TData.map((item)=>(
    TData.filter((item)=>item.id===parseInt(individualid)).map((item,index)=>(


    <div key={item.id}>
        <h3>{item.heading}</h3>
        <p className='justify Font-Small'>
        {item.pone}
        <br/>
        {item.ptwo}
        <br/>
        {item.pthree}
        <br/>
        <h2><b>History</b></h2>
        {item.history}
        <br/>
        {item.historytwo}
        <br/>
        <h2><b>Fairs & Festivals</b></h2>
        {item.fairs}
        <br/>
        <br/>
        <h2><b>Best Time to Visit</b></h2>
        {item.besttime}
        <h2><b>How To Reach</b></h2>
        <div style={{display:'flex'}}>
            <img src='https://www.theindiatourism.com/images/plane.png' alt='Not Found' className='reach'/>
        <h2><b>By Air</b></h2>
        </div>
     {item.byair}
     <div style={{display:'flex'}}>
            <img src='https://www.theindiatourism.com/images/train.png' alt='Not Found' className='reach'/>

        <h2><b>By Rail</b></h2>
        </div>
        {item.byrail}
        <div style={{display:'flex'}}>
            <img src='https://www.theindiatourism.com/images/bas.png' alt='Not Found' className='reach'/>

        <h2><b>By Road</b></h2>
        </div>
        {item.byroad}

        <h2><b>Tourist Attractions</b></h2>
        {item.attractions}




        </p>
    <div className='EntireCardWrapper'>
      {
          PData.map((place)=>(
            item.heading===place.heading?(
            <div key={place.id} className='CardWrapper'>
              <NavLink to={`/placesofstate/${place.id}`}>
                  <img src={place.imagesrc} alt='Not Found' className='CardImgWrapper'/>
      <h2 className='Font-vSmall'>{place.place}</h2>
      </NavLink>
          {/* {place.place} */}
          </div>
            ):null
          ))
       }

    </div>
        </div>
           )

          )
           }
       </div>


    </div>
</div>
</div>
  )
}

export default Stateindividual