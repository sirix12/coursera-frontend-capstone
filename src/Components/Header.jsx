import Nav from "./Nav";
import Logo from "../assets/images/Logo.svg";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <Nav />
        </header>
    )
}