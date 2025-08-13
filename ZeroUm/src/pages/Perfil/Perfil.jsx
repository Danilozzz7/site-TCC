import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Perfil.css';

function Perfil() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ano, setAno] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [experiencia, setExperiencia] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Passa os dados para a tela de visualização usando o state do react-router
    navigate("/perfil-visualizacao", { state: { nome, curso, ano, telefone, email, experiencia } });
  };

  return (
    <div className="perfil-bg">
      <div className="perfil-card">
        <div className="perfil-avatar">
          <span role="img" aria-label="avatar" className="perfil-avatar-icon">👤</span>
        </div>
        <h2 className="perfil-title">Perfil do Estudante</h2>
        <form className="perfil-form" onSubmit={handleSubmit}>
          {/* ... seus inputs aqui, igual já fez ... */}
          <div className="perfil-field">
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div className="perfil-field">
            <label>Curso</label>
            <input
              type="text"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              placeholder="Seu curso"
              required
            />
          </div>
          <div className="perfil-field">
            <label>Ano</label>
            <input
              type="text"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              placeholder="Ano/Semestre"
            />
          </div>
          <div className="perfil-field">
            <label>Telefone</label>
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(xx) xxxxx-xxxx"
            />
          </div>
          <div className="perfil-field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              required
            />
          </div>
          <div className="perfil-field">
            <label>Experiência</label>
            <textarea
              value={experiencia}
              onChange={(e) => setExperiencia(e.target.value)}
              placeholder="Conte um pouco sobre você, experiências, cursos, etc."
            />
          </div>
          <button className="perfil-btn" type="submit">Salvar Perfil</button>
        </form>
      </div>
    </div>
  );
}

export default Perfil;
