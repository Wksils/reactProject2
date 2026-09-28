import './P1_section1.scss'
import {Photo} from '../../../Photo.js'

export default function P1_section1(){
    return(
        <>
            <section className='p1_sect1'>
                <div className='container'>
                    <div className='leftContainer'>
                        <div className='restaurant'><p>Restaurant</p></div>
                        <h1>Italian Cuisine</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                        <div className='btns'>
                            <button>Order now</button>
                            <button>Reservation</button>
                        </div>
                    </div>
                    <div className='rightContainer'>
                        <img src={Photo.pasta} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}