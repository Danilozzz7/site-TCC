import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';
import { DropzoneArea } from './DropzoneArea';

function Perfil() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [ano, setAno] = useState('');
  const [links, setLink] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/perfil-visualizacao', {
      state: { nome, curso, ano },
    });
  };

  return (
    <div className="perfil-bg">
      <div className="perfil-card">
        <div className="perfil-avatar">
          <span role="img" aria-label="avatar" className="perfil-avatar-icon">
            👤
          </span>
        </div>
        <h2 className="perfil-title">Perfil do Estudante</h2>
        <form className="perfil-form" onSubmit={handleSubmit}>
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
            <label>Foto ou documento</label>
            <DropzoneArea />
          </div>
          <div className="perfil-field">
            <label>Links</label>
            <input
              type="text"
              value={ano}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Insira seus links de apoio."
            />
          </div>

          <button type="submit" className="perfil-button">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default Perfil;
