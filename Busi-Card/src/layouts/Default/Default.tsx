import './Default.css'
import '../../pages/Page.css'

import { Route, Routes } from 'react-router-dom'

// components
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

// pages
import Home from '../../pages/Home/Home'
import Customers from '../../pages/Customers/Customers'
import Business from '../../pages/Business/Business'
import Admin from '../../pages/Admin/Admin'
import NotFound from '../../pages/NotFound/NotFound'
import SignIn from '../../pages/SignIn/SignIn'
import UserProfile from '../../pages/UserProfile/UserProfile'
import CardDetails from '../../pages/CardDetails/CardDetails'
import SignUp from '../../pages/SignUp/SignUp'
import MyOwnCards from '../../pages/MyOwnCards/MyOwnCards'
import Deals from '../../pages/Deals/Deals'
import About from '../../pages/About/About'
import FavoriteAds from '../../pages/FavoriteAds/FavoriteAds'
import CreateNewAd from '../../pages/CreateNewAd/CreateNewAd'
import UpdateAd from '../../pages/UpdateAd/UpdateAd'
import AllUsers from '../../pages/AllUsers/AllUsers'

export default function Default() {
  return (
    <div className='Default'>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Customers' element={<Customers/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/favoriteAds' element={<FavoriteAds/>}/>
        <Route path='/CreateNewAd' element={<CreateNewAd/>}/>
        <Route path='/AllUsers' element={<AllUsers/>}/>
        <Route path='/UpdateAd' element={<UpdateAd/>}/>
        <Route path='/mycards' element={<MyOwnCards/>}/>
        <Route path='/card-details/:cardId' element={<CardDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer/>
      
    </div>
  )
}
