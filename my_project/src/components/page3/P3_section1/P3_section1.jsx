import './P3_section1_style.scss'
import { Photo } from '../../../Photo.js'

export default function P3_section1(){
    return(
        <>
            <section className='P3_section1'>
                <div className='container'>
                    <div className='photo'><img src={Photo.cooking} alt=""/></div>
                    <div className='left'>
                        <h2><span style={{color: '#FF8A00'}}>Our</span> restautant</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    </div>
                </div>
            </section>
        </>
    )
}