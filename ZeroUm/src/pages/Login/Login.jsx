import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './Login.css';
import InputField from '../../components/Cadastro/InputField'; 

function Login() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const [nivelAcesso, setNivelAcesso] = useState('ESTUDANTE'); 
    
    const navigate = useNavigate();

   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    
    const API_LOGIN_URL = "http://localhost:8080/api/v1/usuario/login"; 

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            
            const credentials = { 
                email: email, 
                senha: senha, 
                nivelAcesso: nivelAcesso 
            };
            
           
            const response = await axios.post(API_LOGIN_URL, credentials);

            if (response.status === 200 && response.data) {
                
                const userData = response.data;
                console.log("Login bem-sucedido! Dados do usuário:", userData);

                
                localStorage.setItem('user', JSON.stringify(userData));

                alert(`Bem-vindo, ${userData.nome}! Login realizado com sucesso.`);
                
                
                navigate('/'); 
            }

        } catch (err) {
            console.error("Erro no login:", err);
            
            if (err.response && err.response.status === 401) {
                
                setError('Email, senha ou tipo de usuário incorretos. Tente novamente.');
            } else if (err.response) {
               
                setError(`Erro de servidor: ${err.response.status}. Verifique o console.`);
            } else {
                
                setError("Não foi possível conectar ao servidor. Verifique o Back-end (CORS/Porta 8080).");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-bg">
            <div className="login-card">
                <h2 className="login-title">Bem-vindo de volta</h2>
                <p className="login-subtitle">Acesse sua conta para encontrar oportunidades incríveis!</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    
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
                            value={nivelAcesso}
                            onChange={e => setNivelAcesso(e.target.value)}
                            required
                        >
                          
                            <option value="ESTUDANTE">Estudante</option>
                            <option value="EMPRESA">Empresa</option>
                            
                            <option value="ADMINISTRADOR">Administrador</option>
                        </select>
                    </label>
                    
                    
                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <p className="link-cadastro">
                    Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
