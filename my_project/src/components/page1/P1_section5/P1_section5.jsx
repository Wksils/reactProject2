import './P1_section5_style.scss'
import { Photo } from '../../../Photo.js'

export default function P1_section5(){
    return(
        <>
            <section className='P1_section5'>
                <div className='container'>
                    <h2>Our greatest chef</h2>
                    <div className='ourChefs'>
                        <div className='chef'>
                            <img src={Photo.chef1} alt="" />
                            <p className='name'>Betran Komar</p>
                            <p>Head chef</p>
                        </div>
                        <div className='chef'>
                            <img src={Photo.chef2} alt="" />
                            <p className='name'>Ferry Sauwi</p>
                            <p>Chef</p>
                        </div>
                        <div className='chef'>
                            <img src={Photo.chef3} alt="" />
                            <p className='name'>Iswan Dracho</p>
                            <p>Chef</p>
                        </div>
                    </div>
                    <button>View all</button>
                </div>
            </section>
        </>
    )
}