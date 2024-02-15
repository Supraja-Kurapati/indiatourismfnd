import React,{useEffect,useState} from 'react'
import SlideSlider from '../Slider'
import axios from 'axios'
const Stateindividual = () => {
    const [TData,setTData]=useState([])

    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await axios.get('http://localhost:5031/pages/tourPacakges')
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

    <div>
          {
  TData.map((item)=>(
    <div key={item.id}>
        <h3>{item.heading}</h3>
        <p className='justify Font-Small'>
        {item.pone}
        <br/>
        <br/>
        {item.ptwo}
        <br/>
        <br/>
        {item.pthree}

        <br/>
        <br/>
        <h2><b>History</b></h2>
        {item.history}
        <br/>
        <br/>
        {item.historytwo}
        <br/><br/>
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