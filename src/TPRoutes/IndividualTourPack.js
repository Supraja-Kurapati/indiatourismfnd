import React,{useState,useEffect} from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

const IndividualTourPack = () => {
    const [PData,setPData]=useState([])
    const individualid=useParams().id;
    const loc=useLocation()
  
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
      
    
      },[loc.pathname])
    
  return (
    <div className='HomeWrapper'>
    

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>

      {/* <div className='EntireCardWrapper'> */}
{
  PData.filter((pack)=>pack.id===parseInt(individualid)).map((pack)=>(
    <div key={pack.id}>

      <img src={pack.banner} alt={pack.img} className='BannerWrapper'/>
     <h3 className='Font-Medium'> {pack.head}</h3>
<NavLink to='/ContactUs'>
     <button className='ContactUS'><h2>Contact US</h2></button>
     </NavLink>

     <p className='Font-Small justify'>
        {
        pack.pone.replaceAll('<b>','').replaceAll('</b>','').replaceAll('<br>','').replaceAll('<strong>','').replaceAll('</strong>','').replaceAll('<p>','').replaceAll('</p>','')
        
        }
        
        </p>
      </div>
  ))
}
{/* </div> */}




</div>
</div>
</div>
  )
}

export default IndividualTourPack