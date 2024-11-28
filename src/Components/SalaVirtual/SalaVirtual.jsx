import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SalaVirtual.module.css';
import { BsPeopleFill } from 'react-icons/bs';

function SalaVirtual() {
    const [salas, setSalas] = useState([]); // Estado para armazenar as salas
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros

    // Função para buscar as salas da API
    useEffect(() => {
        const fetchSalas = async () => {
            try {
                const response = await fetch("http://localhost:8080/sala/listaSalas");
                if (!response.ok) {
                    throw new Error("Erro ao buscar salas");
                }
                const data = await response.json();
                console.log("Dados recebidos da API:", data); // Verificando a estrutura dos dados
                setSalas(data);
            } catch (err) {
                setError(err.message); // Em caso de erro, armazena a mensagem de erro
            } finally {
                setLoading(false); // Finaliza o estado de carregamento
            }
        };

        fetchSalas(); // Chama a função para buscar as salas
    }, []); // O array vazio [] faz com que a função seja chamada apenas uma vez, ao carregar o componente

    // Função para remover a sala
    const removerSala = async (id_sala) => {
        if (!id_sala) {
            console.error("ID da sala é inválido:", id_sala); // Log para verificar o valor do id_sala
            return;
        }

        try {
            console.log("Removendo sala com ID:", id_sala); // Verifique qual ID está sendo removido
            const response = await fetch(`http://localhost:8080/sala/removerSala/${id_sala}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Remove a sala da lista no frontend
                setSalas(salas.filter(sala => sala.id_sala !== id_sala)); // Mudamos aqui para usar id_sala
            } else {
                throw new Error('Erro ao remover a sala');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    // Se estiver carregando, exibe uma mensagem de carregamento
    if (loading) {
        return <div>Carregando...</div>;
    }

    // Se houver erro, exibe a mensagem de erro
    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <main className={styles.salaVirtualContainer}>
            <Link to="/" className={styles.goBack}>
                <div className={styles.titleContainer}>
                    <h2>VOLTAR</h2>
                </div>
            </Link>

            <div className={styles.titleContainer}>
                <h2>SALAS DISPONÍVEIS</h2>
            </div>

            <div className={styles.cardContainer}>
                {salas.map(sala => {
                    console.log("Sala:", sala); // Verificando a estrutura de cada sala
                    return (
                        <div key={sala.id_sala} className={styles.cardItem}>
                            <div className={styles.cardContent}>
                                <BsPeopleFill className={styles.cardIcon} />
                                <h3>{sala.nome}</h3>
                                <h3>{sala.descricao}</h3>
                                <div className={styles.buttonContainer}>
                                    {/* Link "VER SALA" que não faz nada */}
                                    <Link
                                        to="#"
                                        className={styles.cardLink}
                                        onClick={(e) => e.preventDefault()} // Impede a navegação do link
                                    >
                                        <h4>VER SALA</h4>
                                    </Link>
                                    <Link 
                                        to="#" 
                                        className={styles.cardLink}
                                        onClick={(e) => {
                                            e.preventDefault(); // Impede o comportamento de navegação do link
                                            removerSala(sala.id_sala);
                                        }}
                                    >
                                        <h4>REMOVER</h4>
                                    </Link>
                                    <Link to={`/editar-sala/${sala.id_sala}`} className={styles.cardLink}>
                                        <h4>EDITAR</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default SalaVirtual;
