import './P1_sect2_style.scss'
import { Photo } from '../../../Photo.js'

export default function P1_sect2(){
    return(
        <>
            <section className='P1_sect2'>
                <div className='container'>
                    <div className='leftContainer'>
                        <img src={Photo.salad} alt="" />
                    </div>
                    <div className='rightContainer'>
                        <h2>Welcome to <span style={{color: '#FF8A00'}}>delizioso</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <button>See our menu</button>
                    </div>
                </div>
            </section>
        </>
    )
}