import './home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-hero">
                <h1>Bem-vindo ao Portal de Estágios</h1>
                <p>Encontre as melhores oportunidades de estágio aqui!</p>
                <a href="/vagas" className="home-btn">Ver Vagas</a>
            </div>
        </div>
    );
}

export default Home;