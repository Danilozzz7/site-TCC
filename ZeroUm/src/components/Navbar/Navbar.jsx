import { Link } from 'react-router-dom';
import './Navbar.css'; // Importe o CSS

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">ZeroUm</div>
            <ul className="navbar-list">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/vagas">Vagas</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;