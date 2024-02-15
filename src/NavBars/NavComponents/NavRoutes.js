import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './Home'
import IndiaTourism from './IndiaTourism'
import TourPackages from './TourPackages'
import PlacesToVisit from './PlacesToVisit'
import TourOffers from './TourOffers'
import ContactUs from './ContactUs'
import Login from './Login'
import Register from './Register'
import Stateindividual from '../../StatesPage/Stateindividual'

const NavRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/indiaTourism' element={<IndiaTourism/>}/>
    <Route path='/TourPackages' element={<TourPackages/>}/>
    <Route path='/PlacesToVisit' element={<PlacesToVisit/>}/>
    <Route path='/TourOffers' element={<TourOffers/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>

    <Route path='/stateIndividual/:id' element={<Stateindividual/>}/>
    </Routes>

    </div>
  )
}

export default NavRoutes