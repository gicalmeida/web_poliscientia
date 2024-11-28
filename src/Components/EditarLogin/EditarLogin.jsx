import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditarLogin.module.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import nameIcon from '../Assets/name.png';
import descriptionIcon from '../Assets/description.png';
import ageIcon from '../Assets/age.png';
import schoolIcon from '../Assets/school.png';

const EditarLogin = () => {
    const { id_sala } = useParams();
    const navigate = useNavigate();

    const [professores, setProfessores] = useState([]);
    const [nomeProfessor, setNomeProfessor] = useState("");
    const [emailProfessor, setEmailProfessor] = useState("");
    const [escolaProfessor, setEscolaProfessor] = useState("");
    const [idadeProfessor, setIdadeProfessor] = useState("");
    const [nomeSala, setNomeSala] = useState("");
    const [descricaoSala, setDescricaoSala] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/professor/listaDeProfessores")
            .then(response => response.json())
            .then(data => {
                setProfessores(data);
            })
            .catch(error => {
                console.error("Erro ao carregar os professores:", error);
                setStatus("Erro ao carregar os professores.");
            });

        if (id_sala) {
            fetch(`http://localhost:8080/sala/buscarSala/${id_sala}`)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        setNomeSala(data.nome);
                        setDescricaoSala(data.descricao);
                        if (data.professor && data.professor[0]) {
                            setNomeProfessor(data.professor[0].nome_professor);
                            setEmailProfessor(data.professor[0].email_professor);
                            setEscolaProfessor(data.professor[0].escola);
                            setIdadeProfessor(data.professor[0].idade_professor);
                        }
                    } else {
                        setStatus("Sala não encontrada.");
                    }
                })
                .catch(error => {
                    console.error("Erro ao buscar a sala:", error);
                    setStatus("Erro ao buscar os dados da sala.");
                });
        }
    }, [id_sala]);

    const handleEditProfessorAndRoom = async () => {
        if (!nomeProfessor || !emailProfessor || !escolaProfessor || !idadeProfessor || !nomeSala || !descricaoSala) {
            setStatus('Todos os campos são obrigatórios');
            return;
        }

        const professorAtualizado = {
            nome_professor: nomeProfessor,
            email_professor: emailProfessor,
            escola: escolaProfessor,
            idade_professor: idadeProfessor
        };

        const salaAtualizada = {
            nome: nomeSala,
            descricao: descricaoSala
        };

        try {
            const responseProfessor = await fetch(`http://localhost:8080/professor/editarProfessor/${id_sala}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(professorAtualizado),
            });

            const responseSala = await fetch(`http://localhost:8080/sala/editarSala/${id_sala}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(salaAtualizada),
            });

            if (responseProfessor.ok && responseSala.ok) {
                setStatus("Professor e sala atualizados com sucesso!");
                setTimeout(() => {
                    navigate('/professores', { replace: true });
                }, 2000);
            } else {
                const errorDataProfessor = await responseProfessor.json();
                const errorDataSala = await responseSala.json();
                setStatus(`Erro ao atualizar: ${errorDataProfessor.message || errorDataSala.message}`);
            }
        } catch (error) {
            console.error("Erro ao conectar com a API", error);
            setStatus("Erro ao conectar com a API");
        }
    };

    const handleSelectProfessor = (selectedId) => {
        const professorSelecionado = professores.find(prof => prof.id_professor === parseInt(selectedId));
        if (professorSelecionado) {
            setNomeProfessor(professorSelecionado.nome_professor);
            setEmailProfessor(professorSelecionado.email_professor);
            setEscolaProfessor(professorSelecionado.escola);
            setIdadeProfessor(professorSelecionado.idade_professor);
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Editar Professor</div>
                <div className="underline"></div>
            </div>

            <div className="input">
                <select
                    onChange={(e) => handleSelectProfessor(e.target.value)}
                    value={nomeProfessor}
                >
                    <option value="">Selecione um professor</option>
                    {professores.map((professor) => (
                        <option key={professor.id_professor} value={professor.id_professor}>
                            {professor.nome_professor}
                        </option>
                    ))}
                </select>
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
                    <img src={schoolIcon} alt="Ícone da escola do professor" />
                    <input
                        type="text"
                        placeholder="Escola"
                        value={escolaProfessor}
                        onChange={(e) => setEscolaProfessor(e.target.value)}
                    />
                </div>

                <div className="input">
                    <img src={ageIcon} alt="Ícone de idade do professor" />
                    <input
                        type="number"
                        placeholder="Idade do professor"
                        value={idadeProfessor}
                        onChange={(e) => setIdadeProfessor(e.target.value)}
                    />
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={nameIcon} alt="Ícone do nome da sala" />
                    <input
                        type="text"
                        placeholder="Nome da sala"
                        value={nomeSala}
                        onChange={(e) => setNomeSala(e.target.value)}
                    />
                </div>
                
                <div className="input">
                    <img src={descriptionIcon} alt="Ícone de descrição da sala" />
                    <input
                        type="text"
                        placeholder="Descrição da sala"
                        value={descricaoSala}
                        onChange={(e) => setDescricaoSala(e.target.value)}
                    />
                </div>
            </div>

            <div className="submit-container">
                <button className="submit" onClick={handleEditProfessorAndRoom}>
                    Atualizar Professor
                </button>
            </div>

            <div className="status">
                <p>{status}</p>
            </div>
        </div>
    );
};

export default EditarLogin;
