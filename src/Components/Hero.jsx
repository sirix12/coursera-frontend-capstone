import restuaranfood from '../assets/images/restauranfood.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking"><button className="btn-primary">Reserve a Table</button></Link>
            </div>
            <div className="hero-img">
                <img src={restuaranfood} alt="" className='hero-img' />
            </div>
        </section>
    )
}