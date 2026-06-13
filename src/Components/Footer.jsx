
import Logo from "../assets/images/Logo.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={Logo} alt="Little Lemon Logo" />
                </div>
                <div className="footer-nav">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <ul>
                        <li>123 Food Street, Chicago</li>
                        <li>(312) 555-0199</li>
                        <li>contact@littlelemon.com</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    )
}