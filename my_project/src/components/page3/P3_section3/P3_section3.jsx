import './P3_section3_style.scss'
import { Photo } from '../../../Photo.js'

export default function P3_section3(){
    return(
        <>
            <section className='P3_section3'>
                <div className='container'>
                    <div className='right'><img src={Photo.owner} alt="" /></div>
                    <div className='left'>
                        <h2><span style={{color: '#FF8A00'}}>Owner</span> & Executive Chef</h2>
                        <p className='black'>Ismail Marzuki</p>
                        <div>
                            <p className='asd'>“</p>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='asd'>“</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}