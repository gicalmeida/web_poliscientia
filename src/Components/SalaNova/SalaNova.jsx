import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SalaNova.module.css';
import description from '../Assets/description.png';
import name from '../Assets/name.png';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import school_icon from '../Assets/school.png';
import age_icon from '../Assets/age.png';

const SalaNova = () => {
    // Estados para os campos do professor e da sala
    const [nomeSala, setNomeSala] = useState("");
    const [descricaoSala, setDescricaoSala] = useState("");
    const [nomeProfessor, setNomeProfessor] = useState("");
    const [emailProfessor, setEmailProfessor] = useState("");
    const [escola, setEscola] = useState("");
    const [idade, setIdade] = useState("");
    const [status, setStatus] = useState("");

    // Função para criar a sala e o professor simultaneamente
    const handleCreateRoomAndProfessor = async () => {
        if (!nomeSala || !descricaoSala || !nomeProfessor || !emailProfessor || !escola || !idade) {
            setStatus('Todos os campos são obrigatórios');
            return;
        }

        // Criando os dados do novo professor
        const novoProfessor = { 
            nome_professor: nomeProfessor, 
            email_professor: emailProfessor, 
            escola: escola, 
            idade: idade 
        };

        // Criando os dados da nova sala
        const novaSala = {
            nome: nomeSala,
            descricao: descricaoSala,
            professor: novoProfessor  // Associando o professor à sala
        };

        try {
            // Enviar os dados para a API para criação da sala e professor
            const response = await fetch("http://localhost:8080/sala", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novaSala),
            });

            if (response.ok) {
                const data = await response.json();
                setStatus("Sala e professor criados com sucesso!");
                console.log('Sala e professor criados com sucesso!', data);

                // Limpando os campos após sucesso
                setNomeSala("");
                setDescricaoSala("");
                setNomeProfessor("");
                setEmailProfessor("");
                setEscola("");
                setIdade("");
            } else {
                const errorData = await response.json();
                setStatus(`Erro ao criar a sala e o professor: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Erro ao conectar com a API", error);
            setStatus("Erro ao conectar com a API");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Criar sala</div>
                <div className={styles.underline}></div>
            </div>

            {/* Formulário para dados da sala */}
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={name} alt="Ícone do nome da sala" />
                    <input
                        type="text"
                        placeholder="Nome da sala"
                        value={nomeSala}
                        onChange={(e) => setNomeSala(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={description} alt="Ícone de descrição" />
                    <input
                        type="text"
                        placeholder="Descrição da sala"
                        value={descricaoSala}
                        onChange={(e) => setDescricaoSala(e.target.value)}
                    />
                </div>
            </div>

            {/* Formulário para dados do professor */}
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={user_icon} alt="Ícone do nome do professor" />
                    <input
                        type="text"
                        placeholder="Nome do professor"
                        value={nomeProfessor}
                        onChange={(e) => setNomeProfessor(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={email_icon} alt="Ícone do email do professor" />
                    <input
                        type="email"
                        placeholder="Email do professor"
                        value={emailProfessor}
                        onChange={(e) => setEmailProfessor(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={school_icon} alt="Ícone da escola do professor" />
                    <input
                        type="text"
                        placeholder="Escola"
                        value={escola}
                        onChange={(e) => setEscola(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={age_icon} alt="Ícone da idade do professor" />
                    <input
                        type="number"
                        placeholder="Idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>
            </div>

            {/* Botão de envio */}
            <div className={styles.submit_container}>
                <button className={styles.submit} onClick={handleCreateRoomAndProfessor}>
                    Criar Sala
                </button>
            </div>

            {/* Exibe o status de sucesso ou erro */}
            <div className={styles.status}>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default SalaNova;
