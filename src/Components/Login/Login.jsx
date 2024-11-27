import React, { useState } from 'react';
import './Login.css';  // Importação do arquivo CSS
import { Link } from 'react-router-dom';
import description from '../Assets/description.png';
import name from '../Assets/name.png';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import school_icon from '../Assets/school.png';
import age_icon from '../Assets/age.png';

const Login = () => {
    const [nomeSala, setNomeSala] = useState("");
    const [descricaoSala, setDescricaoSala] = useState("");
    const [nomeProfessor, setNomeProfessor] = useState("");
    const [emailProfessor, setEmailProfessor] = useState("");
    const [escola, setEscola] = useState("");
    const [idade, setIdade] = useState("");
    const [status, setStatus] = useState("");

    const handleCreateProfessorAndRoom = async () => {
        if (!nomeSala || !descricaoSala || !nomeProfessor || !emailProfessor || !escola || !idade) {
            setStatus('Todos os campos são obrigatórios');
            return;
        }

        const novoProfessor = { 
            nome_professor: nomeProfessor, 
            email_professor: emailProfessor, 
            escola: escola, 
            idade: idade,
            sala: [{ nome: nomeSala, descricao: descricaoSala }] 
        };

        try {
            const response = await fetch("http://localhost:8080/professor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoProfessor), 
            });

            if (response.ok) {
                const data = await response.json();
                setStatus("Professor e sala criados com sucesso!");
                console.log('Professor e sala criados com sucesso!', data);

                setNomeSala("");
                setDescricaoSala("");
                setNomeProfessor("");
                setEmailProfessor("");
                setEscola("");
                setIdade("");
            } else {
                const errorData = await response.json();
                setStatus(`Erro ao criar professor e sala: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Erro ao conectar com a API", error);
            setStatus("Erro ao conectar com a API");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Cadastrar Professor</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="Ícone do nome do professor" />
                    <input
                        type="text"
                        placeholder="Nome do professor"
                        value={nomeProfessor}
                        onChange={(e) => setNomeProfessor(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={email_icon} alt="Ícone do email do professor" />
                    <input
                        type="email"
                        placeholder="Email do professor"
                        value={emailProfessor}
                        onChange={(e) => setEmailProfessor(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={school_icon} alt="Ícone da escola do professor" />
                    <input
                        type="text"
                        placeholder="Escola"
                        value={escola}
                        onChange={(e) => setEscola(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={age_icon} alt="Ícone da idade do professor" />
                    <input
                        type="number"
                        placeholder="Idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={name} alt="Ícone do nome da sala" />
                    <input
                        type="text"
                        placeholder="Nome da sala"
                        value={nomeSala}
                        onChange={(e) => setNomeSala(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={description} alt="Ícone de descrição" />
                    <input
                        type="text"
                        placeholder="Descrição da sala"
                        value={descricaoSala}
                        onChange={(e) => setDescricaoSala(e.target.value)}
                    />
                </div>
            </div>

            <div className="submit_container">
                <button className="submit" onClick={handleCreateProfessorAndRoom}>
                    Criar Professor
                </button>
            </div>

            <div className="status">
                <p>{status}</p>
            </div>
        </div>
    );
};

export default Login;