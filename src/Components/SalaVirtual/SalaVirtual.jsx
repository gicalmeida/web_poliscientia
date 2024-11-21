import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SalaVirtual.module.css';
import { BsPeopleFill } from 'react-icons/bs'; 
import { useAppContext } from '../../AppContext';

function SalaVirtual() {
    const { data } = useAppContext();

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
                {data.salas.map(sala => (
                    <div key={sala.id} className={styles.cardItem}>
                        <div className={styles.cardContent}>
                            <BsPeopleFill className={styles.cardIcon} />
                            <h3>{sala.nome}</h3>
                            <h3>{sala.ano}</h3>
                            <h3>{sala.alunos} ALUNOS CADASTRADOS</h3>
                            <div className={styles.buttonContainer}>
                                <Link to="/salaEspecifica" className={styles.cardLink}>
                                    <h4>VER SALA</h4>
                                </Link>
                                <Link to="/alunos" className={styles.cardLink}>
                                    <h4>REMOVER</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default SalaVirtual;