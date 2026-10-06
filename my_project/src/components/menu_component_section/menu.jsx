import './menu_style.scss'
import { Photo } from '../../Photo.js'
import { useEffect, useState } from 'react'

export default function Menu({title}){
    const [activeTab, SetActiveTab] = useState('All Category')
    const [visibItems, setVisibleItems] = useState([])

    const items = [
        {id:1, img: Photo.position1, title: "Spaghetti", category: ""},
        {id:2, img: Photo.position2, title: "Gnocchi", category: ""},
        {id:3, img: Photo.position3, title: "Rovioli", category: ""},
        {id:4, img: Photo.position4, title: "Penne Alla Vodak", category: ""},
        {id:5, img: Photo.position5, title: "Risoto", category: ""},
        {id:6, img: Photo.position6, title: "Splitza Signature", category: ""}
    ]

    useEffect(() =>{
        if(activeTab === 'All category'){
            setVisibleItems(items)
        }else{
            setVisibleItems(items.filter(item => item.category === activeTab))
        }
    },[activeTab])
    return(
        <>
            <section className='menu'>
                <div className='container'>
                    <h2>{title}</h2>
                    <div className='positions'>
                        <div className='btns'>
                            <button onClick={() => SetActiveTab("All Category")}>All category</button>
                            <button onClick={() => SetActiveTab("Dinner")}>Dinner</button>
                            <button onClick={() => SetActiveTab("Lunch")}>Lunch</button>
                            <button onClick={() => SetActiveTab("Dessert")}>Dessert</button>
                            <button onClick={() => SetActiveTab("Drink")}>Drink</button>
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