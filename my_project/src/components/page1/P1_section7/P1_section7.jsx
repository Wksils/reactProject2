import './P1_section7_style.scss'

export default function P1_section7(){
    return(
        <>
            <section className='P1_section7'>
                <div className='container'>
                    <div className='info'>
                        <h2>we are open from</h2>
                        <p>Monday-Sunday</p>
                        <div className='time'>
                            <p>Launch : Mon-Sun : 11:00am-02:00pm</p>
                            <p>Dinner : sunday : 04:00pm-08:00pm</p>
                            <p>04:00pm-09:00pm</p>
                        </div>
                        <div className='btns'>
                            <button>Order now</button>
                            <button>Reservation</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}