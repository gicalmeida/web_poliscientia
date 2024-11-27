import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; // Atualizado para useNavigate
import styles from './EditarSala.module.css'; // Importando as classes do CSS

import nameIcon from '../Assets/name.png';
import descriptionIcon from '../Assets/description.png';
import emailIcon from '../Assets/email.png';
import schoolIcon from '../Assets/school.png';
import ageIcon from '../Assets/age.png';
import userIcon from '../Assets/person.png';

const EditarSala = () => {
    const { id_sala } = useParams();  // Pega o ID da sala da URL
    const navigate = useNavigate();  // Usando useNavigate para navegação
    
    // Estados para os campos do formulário
    const [salas, setSalas] = useState([]); // Lista de salas para seleção
    const [nomeSala, setNomeSala] = useState("");
    const [descricaoSala, setDescricaoSala] = useState("");
    const [nomeProfessor, setNomeProfessor] = useState("");
    const [emailProfessor, setEmailProfessor] = useState("");
    const [escola, setEscola] = useState("");
    const [idade, setIdade] = useState("");
    const [status, setStatus] = useState("");

    // Carrega a lista de salas e a sala específica para edição
    useEffect(() => {
        // Primeiro, carrega todas as salas disponíveis
        fetch("http://localhost:8080/sala/listaSalas")
            .then(response => response.json())
            .then(data => {
                setSalas(data);
            })
            .catch(error => {
                console.error("Erro ao carregar as salas:", error);
                setStatus("Erro ao carregar as salas.");
            });

        // Se houver um id_sala, carrega os dados dessa sala específica
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
                            setEscola(data.professor[0].escola);
                            setIdade(data.professor[0].idade);
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
    }, [id_sala]); // Recarrega sempre que o id_sala mudar

    // Função para editar a sala e o professor
    const handleEditRoomAndProfessor = async () => {
        if (!nomeSala || !descricaoSala || !nomeProfessor || !emailProfessor || !escola || !idade) {
            setStatus('Todos os campos são obrigatórios');
            return;
        }

        // Criando os dados do professor
        const professorAtualizado = {
            nome_professor: nomeProfessor,
            email_professor: emailProfessor,
            escola: escola,
            idade: idade
        };

        // Criando os dados da sala
        const salaAtualizada = {
            nome: nomeSala,
            descricao: descricaoSala,
            professor: professorAtualizado  // Envia o objeto do professor (não em array)
        };

        try {
            // Enviar os dados para a API para atualizar a sala e o professor
            const response = await fetch(`http://localhost:8080/sala/editarSala/${id_sala}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(salaAtualizada),
            });

            if (response.ok) {
              const data = await response.json();
              setStatus("Sala e professor atualizados com sucesso!");
          
              console.log('Sala e professor atualizados com sucesso!', data);
          
              // Exibir a mensagem de sucesso por um tempo antes de redirecionar
              setTimeout(() => {
                  // Redirecionar após o sucesso para /salaVirtual
                  navigate('/salaVirtual', { replace: true }); // Substitui a página atual no histórico
              }, 2000); // Exibe a mensagem por 2 segundos (2000ms)
          } else {
              // Captura a resposta de erro da API
              const errorData = await response.json();
              console.error("Erro na atualização:", errorData);
              setStatus(`Erro ao atualizar sala: ${errorData.message || errorData}`);
          }
          
        } catch (error) {
            console.error("Erro ao conectar com a API", error);
            setStatus("Erro ao conectar com a API");
        }
    };

    // Função para carregar os dados da sala selecionada
    const handleSelectSala = (selectedId) => {
        if (selectedId) {
            navigate(`/editar-sala/${selectedId}`);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Editar Sala</div>
                <div className={styles.underline}></div>
            </div>

            {/* Dropdown para selecionar a sala */}
            <div className={styles.input}>
                <select
                    value={id_sala}
                    onChange={(e) => handleSelectSala(e.target.value)}
                >
                    <option value="">Selecione uma sala</option>
                    {salas.map(sala => (
                        <option key={sala.id_sala} value={sala.id_sala}>
                            {sala.nome}
                        </option>
                    ))}
                </select>
            </div>

            {/* Formulário para dados da sala */}
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={nameIcon} alt="Ícone do nome da sala" />
                    <input
                        type="text"
                        placeholder="Nome da sala"
                        value={nomeSala}
                        onChange={(e) => setNomeSala(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={descriptionIcon} alt="Ícone de descrição" />
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
                    <img src={userIcon} alt="Ícone do nome do professor" />
                    <input
                        type="text"
                        placeholder="Nome do professor"
                        value={nomeProfessor}
                        onChange={(e) => setNomeProfessor(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={emailIcon} alt="Ícone de email do professor" />
                    <input
                        type="email"
                        placeholder="Email do professor"
                        value={emailProfessor}
                        onChange={(e) => setEmailProfessor(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={schoolIcon} alt="Ícone da escola do professor" />
                    <input
                        type="text"
                        placeholder="Escola"
                        value={escola}
                        onChange={(e) => setEscola(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={ageIcon} alt="Ícone da idade do professor" />
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
                <button className={styles.submit} onClick={handleEditRoomAndProfessor}>
                    Atualizar Sala
                </button>
            </div>

            {/* Exibe o status de sucesso ou erro */}
            <div className={styles.status}>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default EditarSala;

