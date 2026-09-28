import './menu_style.scss'
import { Photo } from '../../Photo.js'

export default function Menu({title}){
    return(
        <>
            <section className='menu'>
                <div className='container'>
                    <h2>{title}</h2>
                    <div className='positions'>
                        <div className='btns'>
                            <button>All catagory</button>
                            <button>Dinner</button>
                            <button>Lunch</button>
                            <button>Dessert</button>
                            <button>Drink</button>
                        </div>
                        <div className='food'>
                            <div className='cards'>
                                <div className='card'>
                                    <img src={Photo.position1} alt="" />
                                    <h3>Spaghetti</h3>
                                    <img src={Photo.Rating} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                                    <div>
                                        <h3>$12.05</h3>
                                        <button>Order now</button>
                                    </div>
                                </div>
                                <div className='card'>
                                    <img src={Photo.position2} alt="" />
                                    <h3>Gnocchi</h3>
                                    <img src={Photo.Rating} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                                    <div>
                                        <h3>$12.05</h3>
                                        <button>Order now</button>
                                    </div>
                                </div>
                                <div className='card'>
                                    <img src={Photo.position3} alt="" />
                                    <h3>Rovioli</h3>
                                    <img src={Photo.Rating} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                                    <div>
                                        <h3>$12.05</h3>
                                        <button>Order now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='cards'>
                                <div className='card'>
                                    <img src={Photo.position4} alt="" />
                                    <h3>Penne Alla Vodak</h3>
                                    <img src={Photo.Rating} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                                    <div>
                                        <h3>$12.05</h3>
                                        <button>Order now</button>
                                    </div>
                                </div>
                                <div className='card'>
                                    <img src={Photo.position5} alt="" />
                                    <h3>Risoto</h3>
                                    <img src={Photo.Rating} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                                    <div>
                                        <h3>$12.05</h3>
                                        <button>Order now</button>
                                    </div>
                                </div>
                                <div className='card'>
                                    <img src={Photo.position6} alt="" />
                                    <h3>Splitza Signature</h3>
                                    <img src={Photo.Rating} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                                    <div>
                                        <h3>$12.05</h3>
                                        <button>Order now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pageBtns'>
                        <button className='brown'>&lt;</button>
                        <div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button className='gray'>...</button>
                        </div>
                        <button className='brown'>&gt;</button>
                    </div>
                </div>
            </section>
        </>
    )
}