import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  function LoginCadastro() {
    return (
      <div className="login-entrar">
        <ul className="login-entre">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
        </ul>
      </div>
    );
  }

  // Pop-up de notificações
  function NotificationsPopup() {
    return (
      <div className="notifications-popup">
        <ul>
          <li>Você foi aceito por uma empresa!</li>
          <li>Nova vaga disponível na área de TI.</li>
          <li>Não perca o prazo para inscrição.</li>
        </ul>
      </div>
    );
  }

  // Manipula o clique no sininho
  function handleBellClick() {
    setShowNotifications(!showNotifications);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">ZeroUm</div>
      <ul className="navbar-list">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/vagas">Vagas</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
      <div className="right-section">
        <LoginCadastro />
        <div className="notification-bell" onClick={handleBellClick} title="Notificações">
          🔔
        </div>
        {showNotifications && <NotificationsPopup />}
      </div>
    </nav>
  );
}

export default Navbar;
