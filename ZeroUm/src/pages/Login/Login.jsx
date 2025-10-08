import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importe o axios
import './Login.css';
// Importe o seu componente InputField
import InputField from '../../components/Cadastro/InputField'; 

function Login() {
  const [tipo, setTipo] = useState('estudante');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  // Estados para feedback ao usuário
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Defina a URL da sua API de login aqui
  const API_URL = "http://localhost:8080/api/v1/login"; // Altere se o endpoint for diferente

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Objeto com os dados para enviar à API
      const dadosLogin = { email, senha, tipo };
      
      // Chamada POST para a API
      await axios.post(API_URL, dadosLogin);

      alert('Login realizado com sucesso! Bem-vindo ao ZeroUm.');
      localStorage.setItem('usuarioLogado', JSON.stringify({ tipo, email }));
      navigate('/');

    } catch (err) {
      setError('Email, senha ou tipo de usuário incorretos. Tente novamente.');
      console.error("Erro no login:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="login-title">Bem-vindo de volta</h2>
        <p className="login-subtitle">Acesse sua conta para encontrar oportunidades incríveis!</p>

        <form className="login-form" onSubmit={handleSubmit}>
          {/* Mostra uma mensagem de erro, se houver */}
          {error && <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}
          
          <InputField
            id="email"
            label="email@exemplo.com"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />

          <InputField
            id="senha"
            label="Sua senha"
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />

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
          
          {/* Botão com estado de loading */}
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="link-cadastro">
          Não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a>
        </p>
      </div>
    </div>
  );
}

export default Login;