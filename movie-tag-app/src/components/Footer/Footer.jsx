import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="links">
                <Link to={"#"}>link1</Link>
                <Link to={"#"}>link2</Link>
                <Link to={"#"}>link3</Link>
            </div>
        </footer>
    );
};
export { Footer };
