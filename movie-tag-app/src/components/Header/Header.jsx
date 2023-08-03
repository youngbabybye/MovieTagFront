import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Header = () => {
    return (
        <header className="container menu">
            <div className="menu-logo">
                <Link to="/" className="logo-container" title="MovieTagApp">
                    <img className="icon" src={logo} alt="logo"></img>
                    <div className="logo">MovieTagApp</div>
                </Link>
                <div className="menu-dropdown">
                    <span>Фильмы</span>
                </div>
            </div>
        </header>
    );
};
export { Header };
