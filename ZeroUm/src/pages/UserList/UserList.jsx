import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './UserList.css'; // Importa os novos estilos

const API_BASE_URL = 'http://localhost:8080/api/v1/usuario'; 

function UserList() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null); 
    const [formData, setFormData] = useState({}); 

    // READ: Função para buscar a lista de usuários
    const fetchUsers = () => {
        axios.get(API_BASE_URL)
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => console.error("Erro ao buscar usuários (CORS ou Servidor):", error));
    };

    useEffect(() => {
        fetchUsers();
    }, []); 

    // --- Lógica de EDIÇÃO (UPDATE) ---
    const startEdit = (user) => {
        setEditingUser(user.id);
        // Preenche o formulário com campos editáveis (Nome, Email, Nivel, Status)
        setFormData({ 
            nome: user.nome, 
            email: user.email,
            nivelAcesso: user.nivelAcesso,
            statusUsuario: user.statusUsuario 
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (id) => {
        axios.put(`${API_BASE_URL}/${id}`, formData)
            .then(() => {
                alert('Usuário atualizado com sucesso!');
                setEditingUser(null);
                fetchUsers(); // Recarrega a lista
            })
            .catch(error => console.error("Erro ao atualizar:", error));
    };
    
    // --- Lógica de EXCLUSÃO (DELETE) ---
    const handleDelete = (id) => {
        if (window.confirm(`Tem certeza que deseja excluir o usuário ID ${id}?`)) {
            axios.delete(`${API_BASE_URL}/${id}`)
                .then(() => {
                    alert('Usuário excluído com sucesso!');
                    fetchUsers(); // Recarrega a lista
                })
                .catch(error => console.error("Erro ao excluir:", error));
        }
    };


    // --- Renderização (LISTAGEM) ---
    return (
        <div className="user-list-container">
            <h2>Gerenciamento de Usuários do Projeto Kratos</h2>
            <p className="user-count">Total de usuários: {users.length}</p>
            
            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Nível</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr><td colSpan="6" style={{textAlign: 'center'}}>Nenhum usuário cadastrado.</td></tr>
                    ) : (
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                
                                {editingUser === user.id ? (
                                    // Modo de Edição (UPDATE)
                                    <>
                                        <td><input name="nome" type="text" value={formData.nome || ''} onChange={handleChange} /></td>
                                        <td><input name="email" type="text" value={formData.email || ''} onChange={handleChange} /></td>
                                        <td><input name="nivelAcesso" type="text" value={formData.nivelAcesso || ''} onChange={handleChange} /></td>
                                        <td><input name="statusUsuario" type="text" value={formData.statusUsuario || ''} onChange={handleChange} /></td>
                                        <td className="action-buttons">
                                            <button className="save-btn" onClick={() => handleUpdate(user.id)}>Salvar</button>
                                            <button className="cancel-btn" onClick={() => setEditingUser(null)}>Cancelar</button>
                                        </td>
                                    </>
                                ) : (
                                    // Modo de Visualização (READ)
                                    <>
                                        <td>{user.nome}</td>
                                        <td>{user.email}</td>
                                        <td>{user.nivelAcesso}</td>
                                        <td>{user.statusUsuario}</td>
                                        <td className="action-buttons">
                                            <button className="edit-btn" onClick={() => startEdit(user)}>Editar</button>
                                            <button className="delete-btn" onClick={() => handleDelete(user.id)}>Excluir</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
