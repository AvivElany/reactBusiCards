import { FaRegCopyright } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiGooglemybusiness } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className='Logo'>
            <Link to={'/'} className="navbar-brand">
                <SiGooglemybusiness size={30} color='#dA0c0c' />
                <GiTakeMyMoney size={30} color='#568203' style={{ marginBottom: '15px',marginLeft: '-10px', opacity: '0.9' }} />
                <span style={{ fontWeight: '500', fontFamily: 'Madimi One', color: '#fdbc00 ' }}>Busi-Cards</span>
                <span style={{fontWeight: '300',fontSize: "0.7em"}}> <FaRegCopyright /></span>
            </Link>
        </div>
    )
}
