import './Footer.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Sobre</h4>
                    <p>
                        Portal de Estágios para a Escola Brásilio Flores de Azevedo.<br />
                        De aluno para aluno.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contato</h4>
                    <p>
                        <span className="icon-link"><i className="fas fa-envelope"></i></span>
                        contato@zeroumestagios.com<br />
                        <span className="icon-link"><i className="fas fa-phone"></i></span>
                        (11) 99999-9999
                    </p>
                    <p>
                        <span className="icon-link"><i className="fas fa-map-marker-alt"></i></span>
                  R. Interna Grupo Bandeirante, 138 - Jardim Belval, Barueri - SP 06420-150
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Redes Sociais</h4>
                    <div className="social-icons">
                        <a href="#" className="icon-link" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="icon-link" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="icon-link" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; ZeroUm. 2025 Portal de Estágios para a Escola Brásilio Flores de Azevedo</p>
            </div>
        </footer>
    );
}

export default Footer;