import './header.scss'
import {Photo} from '../../Photo'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div className='logo'>
                        <img src={Photo.Logo} alt="" />
                        <img src={Photo.Delizioso} alt="" />
                    </div>
                    <div className='navigation'>
                        <Link to="/Page1">Home</Link>
                        <Link to="/Page2">Menu</Link>
                        <Link to="/Page3">About Us</Link>
                        <Link>Order Online</Link>
                        <Link>Reservation</Link>
                        <Link>Contact Us</Link>
                    </div>
                    <div className='cartAndLogIn'>
                        <img src={Photo.Cart} alt="" />
                        <button>Log In</button>
                    </div>
                </nav>
            </header>
        </>
    )
}