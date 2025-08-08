import React, { useState } from "react";
import "./PubliqueSuaVaga.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function PublicarVaga() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    jobTitle: "",
    jobArea: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados da vaga:", formData);
    setSubmitted(true);
  }

  return (
    <div className="page">
      <div className="container" role="main">
        <h1 className="title">Publicar uma vaga de estágio</h1>
        <p className="infoText">Preencha os dados abaixo para anunciar sua vaga.</p>

        {submitted ? (
          <div className="successMessage">
            Vaga publicada com sucesso! Obrigado.
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <label className="label" htmlFor="companyName">
              Nome da Empresa
            </label>
            <input
              className="input"
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Ex: Tech Solutions"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <label className="label" htmlFor="email">
              E-mail para contato
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="contato@empresa.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="label" htmlFor="jobTitle">
              Título da Vaga
            </label>
            <input
              className="input"
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Ex: Estágio em Desenvolvimento Web"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />

            <label className="label" htmlFor="jobArea">
              Área
            </label>
            <select
              className="select"
              id="jobArea"
              name="jobArea"
              value={formData.jobArea}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecione a área
              </option>
              <option value="TI">TI / Desenvolvimento</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Administração">Administração</option>
              <option value="Engenharia">Engenharia</option>
              <option value="Outro">Outro</option>
            </select>

            <label className="label" htmlFor="description">
              Descrição da vaga
            </label>
            <textarea
              className="textarea"
              id="description"
              name="description"
              placeholder="Detalhe as responsabilidades, requisitos e benefícios..."
              value={formData.description}
              onChange={handleChange}
              required
            />

            <button type="submit" className="button">
              Publicar vaga
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
