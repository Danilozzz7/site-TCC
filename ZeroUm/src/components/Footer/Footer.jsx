import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Sobre</h4>
                    <p>
                        Portal de Estágios para a Escola Brásilio Flores de Azevedo.<br />
                        Conectando alunos e oportunidades.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contato</h4>
                    <p>
                        <span className="icon-link"><i className="fas fa-envelope"></i></span>
                        contato@brasiliostagios.com<br />
                        <span className="icon-link"><i className="fas fa-phone"></i></span>
                        (51) 99999-9999
                    </p>
                    <p>
                        <span className="icon-link"><i className="fas fa-map-marker-alt"></i></span>
                        Rua Exemplo, 123 - Porto Alegre/RS
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
                <p>&copy; 2025 Portal de Estágios para a Escola Brásilio Flores de Azevedo</p>
            </div>
        </footer>
    );
}

export default Footer;