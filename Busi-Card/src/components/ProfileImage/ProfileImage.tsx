import './ProfileImage.css'
import { Link } from 'react-router-dom'
import { FaCircleUser } from 'react-icons/fa6'
/* import { CgProfile } from 'react-icons/cg' */
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

export default function ProfileImage() {

    const auth = useContext(AuthContext)

    return (
        <li className="nav-item mx-3">
                <Link to='/profile' className="nav-link">
                    {
                    (auth?.userDetails) ?
                        <>
                        {/* <CgProfile className='profile-icon' fill='#00f' style={{ filter: 'drop-shadow(2px 2px 2px rgb(0 0 0 / 0.5))' }} size={32} /> */}
                        <img className='image' src={auth.userDetails.image.url} alt={auth.userDetails.image.alt} />
                        </>
                        :
                        <FaCircleUser className='profile-icon' style={{filter: 'drop-shadow(2px 2px 2px rgb(0 0 0 / 0.5))'}} size={32}/>
                    }
                </Link>
            </li>
    )
}
