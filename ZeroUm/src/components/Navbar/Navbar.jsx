import { Link } from 'react-router-dom';
import './Navbar.css'; // Importe o CSS

function Navbar() {
    function LoginCadastro () {
        return(
            <div className="login-entrar"> 
                <ul className="login-entre">
                    <li><Link to="/login">Login</Link></li> 
                    <li><Link to="/cadastro">Cadastro</Link></li>
                </ul>
            </div>
        );
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">ZeroUm</div>
            <ul className="navbar-list">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/vagas">Vagas</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
            </ul>
            <LoginCadastro /> 
        </nav>
    );
}

export default Navbar;