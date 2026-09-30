import './footer.scss'
import {Photo} from '../../Photo.js'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <footer>
                <div className='top'>
                    <div className='right'>
                        <div className='logo'>
                            <img src={Photo.Logo} alt="" />
                            <p>Delizi<span style={{color: '#FF8A00'}}>ozo</span></p>
                        </div>
                        <p>Viverra gravida morbi egestas facilisis tortor netus non duis tempor. </p>
                        <div className='links'>
                            <img src={Photo.twitter} alt="" />
                            <img src={Photo.Instagram} alt="" />
                            <img src={Photo.Facebook} alt="" />
                        </div>
                    </div>
                    <div className='left'>
                        <div className='info'>
                            <p>Page</p>
                            <ul>
                                <li><Link to="/Page1">Home</Link></li>
                                <li> <Link to="/Page2">Menu</Link></li>
                                <li><Link>Order online</Link></li>
                                <li><Link>Catering</Link></li>
                                <li><Link>Reservation</Link></li>
                            </ul>
                        </div>
                        <div className='info'>
                            <p>Information</p>
                            <ul>
                                <li><Link to="/Page3">About Us</Link></li>
                                <li><Link>Testimonial</Link></li>
                                <li><Link>Event</Link></li>
                            </ul>
                        </div>
                        <div className='info'>
                            <p>Get in touch</p>
                            <ul>
                                <li>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</li>
                                <li>delizioso@gmail.com</li>
                                <li>+123 4567 8901</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>Copyright c 2022 Delizioso</p>
            </footer>
        </>
    )
}