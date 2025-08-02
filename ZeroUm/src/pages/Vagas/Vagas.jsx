import VagaCard from "../../components/VagaCard/VagaCard";
import "./Vagas.css";

const vagas = [
    {
        titulo: "Estágio em Desenvolvimento Web",
        empresa: "Tech Solutions",
        descricao: "Desenvolvimento de aplicações web utilizando React e Node.js.",
        requisitos: "Conhecimento em JavaScript, HTML, CSS. Desejável experiência com React.",
        link: "https://example.com/vaga1"
    },
    {
        titulo: "Estágio em Marketing Digital",
        empresa: "Marketing Pro",
        descricao: "Auxiliar na criação de campanhas de marketing digital e gestão de redes sociais.",
        requisitos: "Conhecimento em SEO, Google Ads e redes sociais.",
        link: "https://example.com/vaga2"
    },
    {
        titulo: "Estágio em Design Gráfico",
        empresa: "Creative Minds",
        descricao: "Criação de peças gráficas para campanhas publicitárias e redes sociais.",
        requisitos: "Conhecimento em Adobe Photoshop e Illustrator.",
        link: "https://example.com/vaga3"
    }
]

function Vagas() {
    return (
        <div>
            <h1>Vagas Disponíveis</h1>
            <div className="vaga-list">
                {vagas.map((vaga, index) => (
                    <VagaCard key={index} vaga={vaga} />
                ))}
            </div>
        </div>
    );
}

export default Vagas;