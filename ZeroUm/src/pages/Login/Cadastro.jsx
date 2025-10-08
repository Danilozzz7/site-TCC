import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import InputField from '../Cadastro/InputField';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('estudante');
  const navigate = useNavigate();

  const API_URL = "";

  function handleSubmit(e) {
    e.preventDefault();
    // Salva o usuário no localStorage simulando cadastro
    localStorage.setItem('usuarioCadastrado', JSON.stringify({ nome, email, tipo }));
    alert('Cadastro realizado com sucesso! Faça login para continuar.');
    navigate('/login');
  }

  return (
    <div className="cadastro-bg">
      <div className="cadastro-card">
        <h2 className="cadastro-title">Junte-se ao ZeroUm</h2>
        <p className="cadastro-subtitle">Seu futuro começa aqui. Cadastre-se e conquiste suas oportunidades!</p>

        <form className="cadastro-form" onSubmit={handleSubmit}>
          <label className="cadastro-label">
            <span>Nome Completo</span>
            <InputField 
              className="cadastro-input" 
              type="text" 
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              autoFocus
              placeholder="Digite seu nome"
            />
          </label>

          <label className="cadastro-label">
            <span>Email</span>
            <InputField
              className="cadastro-input" 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="email@exemplo.com"
            />
          </label>

          <label className="cadastro-label">
            <span>Senha</span>
            <InputField 
              className="cadastro-input"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
              placeholder="Mínimo 6 caracteres"
              minLength={6}
            />
          </label>

          <label className="cadastro-label">
            <span>Tipo de usuário</span>
            <select 
              className="cadastro-input" 
              value={tipo} 
              onChange={e => setTipo(e.target.value)} 
              required
            >
              <option value="estudante">Estudante</option>
              <option value="administrador">Administrador</option>
              <option value="empresa">Empresa</option>
            </select>
          </label>

          <button type="submit" className="cadastro-btn">Cadastrar</button>
        </form>

        <p className="link-login">
          Já tem uma conta? <a href="/login">Entre aqui</a>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
