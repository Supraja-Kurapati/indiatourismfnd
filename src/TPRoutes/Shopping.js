import React, { useEffect,useState } from 'react'
import axios from 'axios'
import SlideSlider from '../Slider'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Shopping = () => {
  const [PData,setPData]=useState([])
  const loc=useLocation()
  useEffect(()=>{
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

    window.scrollTo(0,0)
  },[loc.pathname])
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
<SlideSlider/>
    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
        <h3>India Shopping Tour Packages </h3>
<p className='Font-Small justify'>

	
	
India is famous for shopping also not only for tourism. In India, there will be the availability of so many rare things that may not available in all places. The important thing why foreigners like to shop in India means because of low rates with the best quality. <a href="https://www.theindiatourism.com/india-shopping-tours/index.html">Shopping in India</a> means like sailing on the sea because at different places various shopping things or goods will attract you. Every tour in India can be termed as an <b>art &amp; craft tour package</b> as every city or town in India is a unique centre of some form of artistic craftsmanship. So, naturally, when a visitor visits a city, one finds alluring artistic and finely crafted goods and products to shop and purchase. Naturally, <b>India tour packages</b> convert into <b>shopping tours</b> in India or arts &amp; crafts tours of India.<br/>
<br/>
<b>fabrics</b> :<br/>
India is considered as ultimate paradise for shoppers due to many products and items of India that are worldwide renowned. Indian fabrics are among one of them, which is highly in demand throughout the world. Silk fabrics of places like <b>Varanasi, Patna, Surat, Kanchipuram,</b> and Murshidabad are renowned all over. Tie and Die brilliantly colorful cotton fabric of Rajasthan is always in demand by the Indian as well as foreigners. Himroo fabric, which is blend of silk and cotton having beautiful patterns, is easily available all over India. <b>Kashmir</b> is quite famous for woolens as it is known for best quality woolens available. To explore all these fabrics in a better manner one can shop from well reputed fabric stores that offer branded and high quality fabrics used for making different kind of dresses.<br/>
<br/>
<b>Carpet </b>:<br/>
India's carpet industry is among the largest in the world. Examples of its ancient and fine craftsmanship can be found in museums all over the world. Kashmir has a very long history of carpet making, influenced by the Persians. The carpets in wool and combed wool and silk are made here and can be bought at a good price. Carpets of <b>Jaipur</b> in Rajasthan and Bhadohi near Varanasi in <b>Uttar Pradesh</b> are very famous carpet weaving and manufacturing centres.
Each region has its own specialty. For example, Darjeeling is known for its vibrant Tibetan carpets.<br/>
<br/>
<b>Clothes</b> : <br/>
Clothes are considered as the cheapest stuff in India compared to other countries where it is sold at quite expensive price. Shoppers are offered with numerous choice in India, right from designed clothes, to fashionable clothes, to traditional clothes to ethnic wear shoppers can opt according to one taste and choice. Indian clothes are considered as opulence due to their superb designs and intricate embroideries, which are designed keeping in mind the specific use of the clothes according to the special occasions. Shopping for clothes in India will provide the shoppers with the opportunity of buying clothes for every occasions and festivals at the best of price.<br/>
<br/>
<b>Jewelery </b>:<br/>
Kundan style jewelry from Rajasthan is customary, massive and elaborate. Indian silverware is very famous. Gemstones can be purchased and assembled at will. Besides the diamond, lapis lazuli, <b>Indian rubies,</b> <b>sapphires,</b> moonstones and aquamarines are found. <b>Hyderabad</b> is one of the world centers of sale of pearls. Handmade precious jewelery from Tamil Nadu and <a href="https://www.theindiatourism.com/india-shopping-tours/kerala-shopping-tour.html">Kerala</a> are also important.<br/>
<br/>
<b>Crafts &amp; Leather </b>:<br/>
Again, each region has its specialty. The range consists of exquisite bronzes, art boiler making often plated with silver and pottery. Paper mache is a typical Kashmir product, sometimes decorated with a gold leaf. Marble and alabaster inlay works such as chess boards and ornate plates are a specialty of <a href="https://www.theindiatourism.com/india-shopping-tours/agra-shopping-tour.html">Agra.</a> Shoes, sandals and leather clothing are also available.

	
</p>

<div className='EntireCardWrapper'>
{
  PData.filter((pack)=>pack.heading.includes('Golden Triangle Tours')).map((pack)=>(
    <div key={pack.id} className='CardWrapper'>
<NavLink to={`/itp/${pack.id}`}>

      <img src={pack.img} alt={pack.img} className='CardImgWrapper'/>
     <h2 className='Font-vSmall'> {pack.head}</h2>
     </NavLink>
      </div>
  ))
}
</div>


</div>
</div>
</div>
  )
}

export default Shopping