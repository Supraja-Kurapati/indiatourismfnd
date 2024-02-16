import React,{useState,useEffect} from 'react'
 import SlideSlider from '../../Slider'
 import axios from 'axios'
 import { NavLink } from 'react-router-dom'

const Home = () => {
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

  const [PData,setPData]=useState([])
useEffect(()=>{
  const getData=async()=>{
    try{
      const response=await axios.get('https://indiatourismbknd.onrender.com/pages/places')
      setPData(response.data)
    }
    catch(err){
      console.log(err);
    }
  }
  getData()
},[])

  return (
    <div className='HomeWrapper'>
      <div className='Slider'>
<SlideSlider/>
      </div>

      <div className='EntireTextWrapper'>
        <div className='TotalTextContainer'>
          <h3>The India Tourism - Guided & Customized Private Tour to India</h3> 
          <p className='Font-Small justify'>


     <b>India Tourism</b> is an unequivocally welcoming nation, that bestows reverence and love for its visitors. A nation which follows only one belief blindly <b>“Atithi Devo Bhava”</b> which means “Guest is equivalent to God”. There is so much to discover, a land with varied civilizations, deep-rooted ideologies, uncountable faiths, that is also related to particular historical stories. <b>India Tourism</b> provides an outstanding rich heritage, tasty cuisines from numerous parts of the world, a multitude of enticing sightseeing spots, and much more while visiting this beautiful country. An avid traveler will simply find his place here.<br/>
<br/>
<b>Culture - India Tourism</b><br/>
India is the country that quickly and last experiences on their mind get into one's heart. Perhaps there is no other nation with such a rich mixture of races, vivid colors, language, food, a land overloaded with vibrancy and intense inconsistencies. His country is the birthplace of Hinduism, Buddhism, Jainism and Sikhism; People in any area can be spotted adopting their own special cultural and religious traditions. Yoga is undeniably the biggest destination for spiritual visitors, and Rishikesh, situated in Northern India, is commonly regarded as the country's Yoga hub. Your trip to India will definitely send you goosebumps and a memory like a rollercoaster ride.<br/>
<br/>
<b>Architecture of India - India Tourism</b><br/>
India has <b>32 UNESCO World Heritage-listed sites</b> around the country, making it an epitome of historical wonders, if we speak about the architectural beauty of India has an extensive array of attractive forts, palaces, temples and its ruins and shrines as well. India itself is an international tourist bundle, they only need to select a destination according to their desires and prepare their itinerary. If you have a deep urge to discover a wonderland on this planet, then pack our bags and come to India, a land that is truly blessed with an abundance of natural wonder.<br/>
<br/>
<b>Explore India - India Tourism</b><br/>
Well, every part of the world has a different tale to tell, with enchanting elegance and majestic culture, Northern India is truly blessed, one can get absolutely soaked in valleys and waterfalls and lush greenery of Himalayan ranges. The western part of the world has a striking beauty of architectural wonder, and what people enjoy about this place is the contemporary lifestyle. And we're talking about the regions of the Sunderbans or the eastern part of India, well, no one can argue that this area is blessed with the scenic beauty of high hills, ondulating rivers and waterfalls. Finally, the southern area is blessed with planting and foliage loads, an exotic destination in the entire world, a combination of enticing beach sites, Tourists continue to see hills and waterfalls again and again! There are plenty of great reasons to visit India Tourism, so we have already offered a mini-tour.<br/>
<br/>
<b>Why Travel to India? - India Tourism</b><br/>
Plan a trip once, and you will come to know that this nation embellishes exotic and energetic metropolitan conventions with both serene and plain village life. Welcoming you to "The Soul of Incredible India" with open arms and intriguing taglines such as, <b>"God's Own Country",</b> this country has its own special ways of making people fall in love with her!<br/>
Foreign tourists who fly to India, You are certainly in for a surprise, particularly for the first time. Things can seem a little messy, overwhelming, and out of reach before you start to become attuned to the way of life in this diverse country. You will better plan for the trip ahead by becoming acquainted with the terrain, climate, history, languages and other important pieces of knowledge. Here are a few specifics that would be helpful.
  </p>

  <br/><br/><br/>
  <h3>Find Your Ideal Tour Packages</h3> 
  <br/>
  <p className='Font-Small justify'>

Travel in India is like nothing you’ve ever experienced, from the magnificence Taj Mahal to the highlights of Kerala, Goa and India, this is a great trip for first-time visitors as it encompasses all of the major tourist destinations.
  </p>

  <div className='packagesWrapper'>
  <div className='EntireCardWrapper'>
  {
  TData.filter((e)=>e.id<9).map((item)=>(
  
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

  <h3>Find Your Perfect Holiday Destination</h3> 
  <p className='Font-Small justify'>
Check out this India most iconic heritage, natural beauty, colourful, cultural and spiritual Attractions India. Beaches, backwaters, vast stretches of deserts, snow-laden peaks and Indian wildlife sanctuaries make the country one of the best winter destinations.  
  </p>
          
  <div className='packagesWrapper'>
  <div className='EntireCardWrapper'>
  {
  PData.filter((e)=>e.id%6===0).map((place)=>(
    <div key={place.id} className='smallCard'>
    <NavLink to={`/placesofstate/${place.id}`} target="_blank">
{/* <NavLink to='/stateIndividual'> */}

    <img src={place.imagesrc} alt='Not Found' className='CardsmallImgWrapper'/>
    <h2 className='Font-vSmall'>{place.place}</h2>
    </NavLink>
    {/* </NavLink> */}
    </div> 

   ) )}

</div>
  </div>

  <h3>Choose Your Style of Tour Packages</h3> 
  <p className='Font-Small justify'>

Our collection of tour are themed by a style to help you get the most out of your wonderful holiday in India whether you're looking for a small group tour, private tailor made holiday to see India, These packages are meant to cater every of your interest, and that too without hampering your comfort in the travel. The intriguing land of India has so much to explore. 
  </p>

  <div className='packagesWrapper'>
  <div className='EntireCardWrapper'>
  {
  TData.filter((e)=>e.id>6).map((item)=>(
  
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
    </div>
  )
}

export default Home