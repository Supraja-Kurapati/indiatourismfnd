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
import PlacesofState from '../../StatesPage/placesofState'
import GoldenTour from '../../TPRoutes/GoldenTour'
import Hm from '../../TPRoutes/Hm'
import FamilyTours from '../../TPRoutes/FamilyTours'
import Adventure from '../../TPRoutes/Adventure'
import BudgetTours from '../../TPRoutes/BudgetTours'
import LuxuryTours from '../../TPRoutes/LuxuryTours'
import Solotour from '../../TPRoutes/Solotour'
import North from '../../TPRoutes/North'
import South from '../../TPRoutes/South'
import Shopping from '../../TPRoutes/Shopping'
import FoodTour from '../../TPRoutes/FoodTour'
import PiliTour from '../../TPRoutes/PiliTour'
import IndividualTourPack from '../../TPRoutes/IndividualTourPack'
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
    <Route path='/placesofstate/:id' element={<PlacesofState/>}/>

    <Route path='/golden' element={<GoldenTour/>}/>
    <Route path='/honeymoon' element={<Hm/>}/>
    <Route path='/family' element={<FamilyTours/>}/>
    <Route path='/adventure' element={<Adventure/>}/>
    <Route path='/budget' element={<BudgetTours/>}/>
    <Route path='/luxury' element={<LuxuryTours/>}/>
    <Route path='/solo' element={<Solotour/>}/>
    <Route path='/north' element={<North/>}/>
    <Route path='/south' element={<South/>}/>
    <Route path='/shopping' element={<Shopping/>}/>
    <Route path='/food' element={<FoodTour/>}/>
    <Route path='/pili' element={<PiliTour/>}/>
    <Route path='/itp/:id' element={<IndividualTourPack/>}/>
    </Routes>

    </div>
  )
}

export default NavRoutes