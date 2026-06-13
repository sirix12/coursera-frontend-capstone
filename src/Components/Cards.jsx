
import greekSalad from '../assets/images/greek salad.jpg'
import lemonDessert from '../assets/images/lemon dessert.jpg'

export default function Cards() {
    const cards = [
        { id: 1, title: 'Greek Salad', price: '$12.99', description: 'The famous greek salad from Little Lemon', image: greekSalad },
        { id: 2, title: 'Lemon Dessert', price: '$12.99', description: 'The famous lemon dessert from Little Lemon', image: lemonDessert },
        { id: 3, title: 'Greek Salad', price: '$12.99', description: 'The famous greek salad from Little Lemon', image: greekSalad },
    ]
    return (
        <section className="cards-container">
            <div className="cards-grid">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>{card.title}</h3>
                                <span className="card-price">{card.price}</span>
                            </div>
                            <p className="card-description">{card.description}</p>
                            <button className="card-button">Order a Delivery</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}