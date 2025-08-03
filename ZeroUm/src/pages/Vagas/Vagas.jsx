import React, { useState } from "react";
import "./Vagas.css";

const vagas = [
    {
        titulo: "Estágio em Desenvolvimento Web",
        empresa: "Tech Solutions",
        descricao: "Desenvolvimento de aplicações web utilizando React e Node.js.",
        requisitos: "Conhecimento em JavaScript, HTML, CSS. Desejável experiência com React.",
        link: "https://example.com/vaga1",
        icone: "💻",
        cor: "#2196f3"
    },
    {
        titulo: "Estágio em Marketing Digital",
        empresa: "Marketing Pro",
        descricao: "Auxiliar na criação de campanhas de marketing digital e gestão de redes sociais.",
        requisitos: "Conhecimento em SEO, Google Ads e redes sociais.",
        link: "https://example.com/vaga2",
        icone: "📈",
        cor: "#43a047"
    },
    {
        titulo: "Estágio em Design Gráfico",
        empresa: "Creative Minds",
        descricao: "Criação de peças gráficas para campanhas publicitárias e redes sociais.",
        requisitos: "Conhecimento em Adobe Photoshop e Illustrator.",
        link: "https://example.com/vaga3",
        icone: "🎨",
        cor: "#ab47bc"
    },
    {
        titulo: "Estágio em Suporte Técnico",
        empresa: "InfoHelp",
        descricao: "Atendimento ao cliente e resolução de problemas técnicos.",
        requisitos: "Boa comunicação, conhecimento básico em informática.",
        link: "https://example.com/vaga4",
        icone: "🛠️",
        cor: "#ff7043"
    },
    {
        titulo: "Estágio em Recursos Humanos",
        empresa: "RH Mais",
        descricao: "Auxiliar nos processos de recrutamento e seleção.",
        requisitos: "Cursando Administração, Psicologia ou áreas afins.",
        link: "https://example.com/vaga5",
        icone: "💗",
        cor: "#ec407a"
    },
    {
        titulo: "Estágio em Finanças",
        empresa: "Finance Group",
        descricao: "Apoio em análises financeiras e elaboração de relatórios.",
        requisitos: "Excel intermediário, cursando Administração ou Economia.",
        link: "https://example.com/vaga6",
        icone: "💰",
        cor: "#5c6bc0"
    },
    {
        titulo: "Estágio em Engenharia de Produção",
        empresa: "ProdTech",
        descricao: "Acompanhamento de processos produtivos e controle de qualidade.",
        requisitos: "Cursando Engenharia de Produção.",
        link: "https://example.com/vaga7",
        icone: "🏭",
        cor: "#ffa726"
    },
    {
        titulo: "Estágio em Comunicação",
        empresa: "Comunique-se",
        descricao: "Produção de conteúdo para mídias digitais e assessoria de imprensa.",
        requisitos: "Cursando Jornalismo, Publicidade ou Relações Públicas.",
        link: "https://example.com/vaga8",
        icone: "📰",
        cor: "#29b6f6"
    },
    {
        titulo: "Estágio em Administração",
        empresa: "Admin Solutions",
        descricao: "Apoio nas rotinas administrativas e organização de documentos.",
        requisitos: "Cursando Administração.",
        link: "https://example.com/vaga9",
        icone: "📋",
        cor: "#8d6e63"
    },
    {
        titulo: "Estágio em TI - Infraestrutura",
        empresa: "InfraTech",
        descricao: "Auxílio na manutenção de redes e suporte a usuários.",
        requisitos: "Conhecimento básico em redes e hardware.",
        link: "https://example.com/vaga10",
        icone: "🔌",
        cor: "#00bcd4"
    }
];



function Vagas() {
    const [expandida, setExpandida] = useState(null);

    const handleExpandir = (index) => {
        setExpandida(expandida === index ? null : index);
    };

    return (
        <div className="vagas-container">
            <div className="vagas-hero">
                <h1>
                    <span className="gradient-text">Vagas Disponíveis</span>
                </h1>
                <p>Confira as melhores oportunidades de estágio para impulsionar sua carreira!</p>
            </div>
            <div className="vaga-list">
                {vagas.map((vaga, index) => (
                    <div className={`vaga-card${expandida === index ? " expandida" : ""}`} key={index}>
                        <div className="vaga-icon" style={{background: vaga.cor}}>{vaga.icone}</div>
                        <div className="vaga-info">
                            <h3>{vaga.titulo}</h3>
                            <p><strong>Empresa:</strong> {vaga.empresa}</p>
                            <p>{vaga.descricao}</p>
                            <p className="vaga-requisitos"><strong>Requisitos:</strong> {vaga.requisitos}</p>
                         {expandida === index && (
    <div className="vaga-detalhes">
        <div className="vaga-detalhes-bloco">
            <h4>Sobre a vaga</h4>
            <p>{vaga.descricao}</p>
            <h4>Requisitos</h4>
            <ul>
                {vaga.requisitos.split(',').map((req, i) => (
                    <li key={i}>{req.trim()}</li>
                ))}
            </ul>
            <h4>Empresa</h4>
            <p>{vaga.empresa}</p>
            <h4>Local</h4>
            <p>Remoto ou Presencial (verifique com a empresa)</p>
            <h4>Benefícios</h4>
            <ul>
                <li>Bolsa auxílio compatível</li>
                <li>Vale transporte</li>
                <li>Ambiente colaborativo</li>
            </ul>
        </div>
        <button className="vaga-inscrever">Se inscrever</button>
    </div>
)}
                        </div>
                        <button
                            className="vaga-btn"
                            onClick={() => handleExpandir(index)}
                            style={{marginLeft: "auto"}}
                        >
                            {expandida === index ? "Fechar" : "Ver Detalhes"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vagas;