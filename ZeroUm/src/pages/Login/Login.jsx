import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [tipo, setTipo] = useState('estudante');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('usuarioLogado', JSON.stringify({ tipo, email }));
    navigate('/');
  }

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="login-title">Entrar no ZeroUm</h2>
        <p className="login-subtitle">Acesse sua conta para encontrar oportunidades!</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">
            <span>Email</span>
            <input
              className="login-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
            />
          </label>
          <label className="login-label">
            <span>Senha</span>
            <input
              className="login-input"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            <span>Tipo de usuário</span>
            <select
              className="login-input"
              value={tipo}
              onChange={e => setTipo(e.target.value)}
              required
            >
              <option value="estudante">Estudante</option>
              <option value="administrador">Administrador</option>
              <option value="empresa">Empresa</option>
            </select>
          </label>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;