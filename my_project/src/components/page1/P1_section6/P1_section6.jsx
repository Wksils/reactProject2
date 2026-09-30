import './P1_section6_style.scss'
import {Photo} from '../../../Photo.js'

export default function P1_section6(){
    return(
        <>
            <section className='P1_section6'>
                <div className='container'>
                    <h2>Our customers say</h2>
                    <div className='mainUser'>
                        <img src={Photo.main_user} alt="" />
                    </div>
                    <div className='nameUser'>
                        <p className='name'>Starla Virgoun</p>
                        <p>Financial advisor</p>
                    </div>
                    <div className='text'>
                        <p className='asd'>“</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <p className='asd'>“</p>
                    </div>
                    <div className='users'>
                        <img src={Photo.users_div} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}