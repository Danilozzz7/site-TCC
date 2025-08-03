import './home.css';


function Home() {
    return (
        <div className="home-landing">
            <header className="home-header">
                <div className="home-title-block">
                    <h1>
                        Encontre o <span className="gradient-text">estágio perfeito</span> para sua carreira
                    </h1>
                    <p>
                        Conectamos estudantes talentosos com as melhores oportunidades de estágio. Sua próxima experiência profissional está aqui.
                    </p>
                    <div className="home-actions">
                        <a href="/vagas" className="home-btn">Buscar Vagas</a>
                        <a href="#saiba-mais" className="home-btn secondary">Saiba Mais</a>
                    </div>
                    <div className="home-stats">
                        <div>
                            <span className="stat-num">+5.000</span>
                            <span className="stat-label">vagas ativas</span>
                        </div>
                        <div>
                            <span className="stat-num">+1.200</span>
                            <span className="stat-label">empresas</span>
                        </div>
                        <div>
                            <span className="stat-num">98%</span>
                            <span className="stat-label">satisfação dos usuários</span>
                        </div>
                    </div>
                </div>
                <div className="home-image-block">
                    <img
                        src="../img/foto.jpg"
                        alt="Ilustração sobre estágio"
                        className="home-illustration"
                    />
                </div>
            </header>
            <section className="home-benefits" id="saiba-mais">
                <h2>Por que escolher o ZeroUm?</h2>
                <p>
                    Oferecemos uma experiência completa para estudantes que buscam excelência em suas primeiras experiências profissionais.
                </p>
                <div className="benefits-list">
                    <div className="benefit-card">
                        <span className="benefit-icon">🎯</span>
                        <h3>Vagas Personalizadas</h3>
                        <p>Algoritmo inteligente que encontra vagas compatíveis com seu perfil e objetivos de carreira.</p>
                    </div>
                    <div className="benefit-card">
                        <span className="benefit-icon">🏢</span>
                        <h3>Empresas Verificadas</h3>
                        <p>Parcerias com empresas confiáveis que oferecem experiências reais de aprendizado.</p>
                    </div>
                    <div className="benefit-card">
                        <span className="benefit-icon">📚</span>
                        <h3>Preparação Completa</h3>
                        <p>Dicas, templates e orientações para se destacar no processo seletivo.</p>
                    </div>
                    <div className="benefit-card">
                        <span className="benefit-icon">📈</span>
                        <h3>Acompanhamento</h3>
                        <p>Monitoramento do seu progresso e suporte durante todo o período do estágio.</p>
                    </div>
                </div>
            </section>
            <section className="home-vagas" id="vagas">
                <h2>Vagas Disponíveis</h2>
                <div className="vagas-list">
                    {/* Exemplo de vagas, mantenha o array e o map igual estava antes */}
                    <div className="vaga-card">
                        <span className="vaga-icon" style={{background: "#2196f3"}}>💻</span>
                        <div>
                            <h3>Estágio em Desenvolvimento Web</h3>
                            <p><strong>Empresa:</strong> Tech Solutions</p>
                            <p>Desenvolvimento de aplicações web utilizando React e Node.js.</p>
                            <p className="vaga-requisitos"><strong>Requisitos:</strong> Conhecimento em JavaScript, HTML, CSS. Desejável experiência com React.</p>
                        </div>
                    </div>
                    <div className="vaga-card">
                        <span className="vaga-icon" style={{background: "#43a047"}}>📈</span>
                        <div>
                            <h3>Estágio em Marketing Digital</h3>
                            <p><strong>Empresa:</strong> Marketing Pro</p>
                            <p>Auxiliar na criação de campanhas de marketing digital e gestão de redes sociais.</p>
                            <p className="vaga-requisitos"><strong>Requisitos:</strong> Conhecimento em SEO, Google Ads e redes sociais.</p>
                        </div>
                    </div>
                    {/* Adicione as demais vagas conforme seu array */}
                </div>
            </section>
        </div>
    );
}

export default Home;