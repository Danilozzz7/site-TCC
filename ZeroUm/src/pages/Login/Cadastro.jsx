import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Reaproveite o CSS do Login

function Cadastro() {
  const [tipo, setTipo] = useState('aluno');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Aqui você pode salvar os dados ou enviar para uma API
    localStorage.setItem('usuarioCadastrado', JSON.stringify({ tipo, email, nome, empresa }));
    navigate('/login');
  }

  return (
    <div className="page-container">
      <div>
        <h2 className="title">Cadastro</h2>
        <p className="subtitle message">Crie sua conta</p>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <select
              className="input"
              value={tipo}
              onChange={e => setTipo(e.target.value)}
              required
            >
              <option value="aluno">Aluno</option>
              <option value="empresa">Empresa</option>
              <option value="administrador">Administrador</option>
            </select>
            <span>Tipo de usuário</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder=" "
              required
            />
            <span>Nome</span>
          </label>

          {tipo === 'empresa' && (
            <label>
              <input
                className="input"
                type="text"
                value={empresa}
                onChange={e => setEmpresa(e.target.value)}
                placeholder=" "
                required
              />
              <span>Nome da Empresa</span>
            </label>
          )}

          <label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <span>Email</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              placeholder=" "
              required
            />
            <span>Senha</span>
          </label>

          <button type="submit" className="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;