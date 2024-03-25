import './Header.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Logo from '../Logo/Logo';
import { NavDropdown } from 'react-bootstrap';
import ProfileImage from '../ProfileImage/ProfileImage';

const elmDocument = document.querySelector('html') as HTMLHtmlElement

export default function Header() {

  const [theme, setTheme] = useState('light')

  const auth = useContext(AuthContext)

  useEffect(()=>{
    const lsTheme = localStorage.getItem('theme')

    if (lsTheme) {
      // found theme key
      elmDocument.setAttribute('data-bs-theme',lsTheme)
      setTheme(lsTheme)
    } else {
      // theme key not found
      localStorage.setItem('theme','light')
      elmDocument.setAttribute('data-bs-theme','light')
      setTheme('light')
    }
  },[])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine the new theme based on the current one
    setTheme(newTheme); // Update the state with the new theme
    elmDocument.setAttribute('data-bs-theme', newTheme); // Set the attribute based on the new theme
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className='Header'>

      <div className="navbar navbar-light navbar-expand-xl px-2 border-bottom pb-4">

        {/* ---- Logo ------------------------------------------------------------------------------------------------------------------------------------------ */}
        <Logo />
        {/* ---- Search ---------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="col-lg-3 mx-auto w-20">
          <div className="input-group">
            <input className="form-control border-end-0 border rounded-3" type="search" id="header-search-input" /> {/*value="search"*/}
            <span className="input-group-append">
              <button style={{ marginLeft: '-41px' }} className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-3" type="button">
                <FaMagnifyingGlass />
              </button>
            </span>
          </div>
        </div>

        {/* ---- Hamburger ------------------------------------------------------------------------------------------------------------------------------------- */}
        <button className="navbar-toggler ms-2" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ---- Nav Links ------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="navbar-collapse collapse" id="menu">
          <ul className="navbar-nav ms-auto" style={{ listStyle: 'none' }}>

            {/* ---- Pages ------------------------------------------------------------------------------------------------------------------------------------- */}
            <li className="nav-item mx-2">
              <Link to={'/'} className='nav-link'>Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to={'/about'} className='nav-link'>About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to={'/Customers'} className='nav-link'>Our Customers</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to={'/Deals'} className='nav-link'>Our Deals</Link>
            </li>
            {
              (auth?.userDetails) ?
              <NavDropdown title="Admin Actions" id="basic-nav-dropdown">
                <Link to={'/mycards'} className='nav-link'>My Cards</Link>
                {(auth?.userDetails?.isAdmin) ? <Link to={'/AllUsers'} className='nav-link'>All Users</Link> :''}
                <Link to={'/FavoriteAds'} className='nav-link'>Favorite Ads</Link>
                <Link to={'/CreateNewAd'} className='nav-link'>Create New Ad</Link>
                {(auth?.userDetails?.isAdmin || auth.userDetails.isBusiness) ? <Link to={'/UpdateAd'} 
                className='nav-link'>Update Some Ad</Link> :''}
                <Link to={'/profile'} className='nav-link'>Prifile</Link>
              </NavDropdown>
              :
                <><li className="nav-item mx-2">
                  <Link to={'/signin'} className='nav-link'>Sigh In</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to={'/signup'} className='nav-link'>Sigh up</Link>
                </li></>
            }
            {/* ---- Light\Dark Mode --------------------------------------------------------------------------------------------------------------------------- */}
            <li className="nav-item mx-3 theme-icon my-auto">
              <button type="button" className='dark-light-mode-button' onClick={() => toggleTheme()}>
                
                {
                  theme === 'light' ?
                    <BsFillMoonStarsFill size={18} fill='#000070'/>
                  :
                    <BsFillSunFill size={18} fill='#FFFFB0'/>
                }
              </button>
            </li>

            {/* ---- User Profile ------------------------------------------------------------------------------------------------------------------------------ */}
            <li className="nav-item mx-3">
              <ProfileImage />
            </li>

          </ul>
        </div>

      </div>

    </div>
  )
}
