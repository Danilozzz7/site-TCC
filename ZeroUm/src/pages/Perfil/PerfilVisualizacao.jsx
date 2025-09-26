import React from 'react';
import './PerfilVisualizacao.css';

function PerfilVisualizacao({ location }) {
  const links = location?.state?.links || 'Nenhum link fornecido';

  return (
    <div className="perfil-bg">
      <div className="perfil-card">
        <h2 className="perfil-title">Perfil do Estudante (Visualização)</h2>

        <div className="perfil-view-field">
          <strong>Links:</strong> <span>{links}</span>
        </div>

        <div className="perfil-view-field">
          <strong>Foto ou Documento:</strong>
          <div style={{ fontSize: 60, marginTop: 10 }}>👤</div>
        </div>
      </div>
    </div>
  );
}

export default PerfilVisualizacao;
