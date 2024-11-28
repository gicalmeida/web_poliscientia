import React, { useState, useEffect } from 'react';
import styles from './ExcluirLogin.module.css';
import user_icon from '../Assets/person.png';

const ExcluirLogin = () => {
    const [professores, setProfessores] = useState([]);
    const [professorSelecionado, setProfessorSelecionado] = useState("");
    const [status, setStatus] = useState("");

    // Carregar lista de professores ao montar o componente
    useEffect(() => {
        const fetchProfessores = async () => {
            try {
                const response = await fetch("http://localhost:8080/professor/listaDeProfessores");
                const data = await response.json();
                setProfessores(data);
            } catch (error) {
                console.error("Erro ao carregar a lista de professores", error);
                setStatus("Erro ao carregar a lista de professores");
            }
        };

        fetchProfessores();
    }, []);

    // Função para excluir o professor
    const handleDeleteProfessor = async () => {
        if (!professorSelecionado) {
            setStatus("Selecione um professor para excluir.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/professor/removerProfessor/${professorSelecionado}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setStatus("Professor excluído com sucesso!");
                // Atualizar lista de professores após exclusão
                setProfessores(professores.filter(professor => professor.id_professor !== parseInt(professorSelecionado)));
                setProfessorSelecionado("");
            } else {
                setStatus("Erro ao excluir o professor.");
            }
        } catch (error) {
            console.error("Erro ao excluir professor", error);
            setStatus("Erro ao conectar com a API");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Excluir Professor</div>
                <div className={styles.underline}></div>
            </div>

            {/* Campo para selecionar o professor */}
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={user_icon} alt="Ícone do nome do professor" />
                    <select
                        value={professorSelecionado}
                        onChange={(e) => setProfessorSelecionado(e.target.value)}
                    >
                        <option value="">Selecione um professor</option>
                        {professores.map((professor) => (
                            <option key={professor.id_professor} value={professor.id_professor}>
                                {professor.nome_professor}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Botão de excluir */}
            <div className={styles.submit_container}>
                <button className={styles.submit} onClick={handleDeleteProfessor}>
                    Excluir Professor
                </button>
            </div>

            {/* Exibe o status de sucesso ou erro */}
            <div className={styles.status}>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default ExcluirLogin;
