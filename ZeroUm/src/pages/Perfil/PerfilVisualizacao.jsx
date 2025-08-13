import React from 'react';
import './PerfilVisualizacao.css';

function PerfilVisualizacao({ nome, curso, ano, telefone, email, experiencia }) {
  return (
    <div className="perfil-bg">
      <div className="perfil-card">
        <div className="perfil-avatar">
          <span role="img" aria-label="avatar" className="perfil-avatar-icon">👤</span>
        </div>
        <h2 className="perfil-title">Perfil do Estudante (Visualização)</h2>
        <div className="perfil-view-field">
          <strong>Nome:</strong> <span>{nome}</span>
        </div>
        <div className="perfil-view-field">
          <strong>Curso:</strong> <span>{curso}</span>
        </div>
        <div className="perfil-view-field">
          <strong>Ano:</strong> <span>{ano}</span>
        </div>
        <div className="perfil-view-field">
          <strong>Telefone:</strong> <span>{telefone}</span>
        </div>
        <div className="perfil-view-field">
          <strong>Email:</strong> <span>{email}</span>
        </div>
        <div className="perfil-view-field">
          <strong>Experiência:</strong>
          <p>{experiencia}</p>
        </div>
      </div>
    </div>
  );
}

export default PerfilVisualizacao;
