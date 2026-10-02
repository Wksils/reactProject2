import './P3_section2_style.scss'
import {Photo} from '../../../Photo.js'

export default function P3_section2(){
    return(
        <>
            <section className='P3_section2'>
                <div className='container'>
                    <div className='right'>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <div className='photo'><img src={Photo.breakfast} alt="" /></div>
                </div>
            </section>
        </>
    )
}