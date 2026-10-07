import './menu_style.scss'
import { Photo } from '../../Photo.js'
import { useEffect, useState } from 'react'

export default function Menu({title}){
    const [activeTab, SetActiveTab] = useState('All Category')
    const [visibItems, setVisibleItems] = useState([])

    const items = [
        {id:1, img: Photo.position1, title: "Spaghetti", category: "Lunch"},
        {id:2, img: Photo.position2, title: "Gnocchi", category: "Dinner"},
        {id:3, img: Photo.position3, title: "Rovioli", category: "Lunch"},
        {id:4, img: Photo.position4, title: "Penne Alla Vodak", category: "Dinner"},
        {id:5, img: Photo.position5, title: "Risoto", category: "Lunch"},
        {id:6, img: Photo.position6, title: "Splitza Signature", category: "Lunch"}
    ]

    const filteredItems = activeTab === 'All Category' 
    ? items 
    : items.filter(item => item.category === activeTab);

  const topThree = filteredItems.slice(0, 3);
  const restItems = filteredItems.slice(3);

  const renderCard = (item) => (
    <div className='card' key={item.id}>
      <img src={item.img} alt={item.title} /> 
      <h3>{item.title}</h3>
      <img src={Photo.Rating} alt="Rating" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div>
        <h3>$12.05</h3>
        <button>Order now</button>
      </div>
    </div>
  );
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
                            <div className='topCards'>
                                 {topThree.map(item => renderCard(item))}
                            </div>
                            <div className='nizCards'>
                                {restItems.map(item => renderCard(item))}
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