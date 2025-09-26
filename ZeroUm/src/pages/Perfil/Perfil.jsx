import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';
import { DropzoneArea } from './DropzoneArea';

function Perfil() {
  const [links, setLinks] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/perfil-visualizacao', {
      state: { links },
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
            <label>Foto ou documento</label>
            <DropzoneArea />
          </div>

          <div className="perfil-field">
            <label>Links</label>
            <input
              type="text"
              value={links}
              onChange={(e) => setLinks(e.target.value)}
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
