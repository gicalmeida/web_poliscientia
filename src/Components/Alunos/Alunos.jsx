import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Alunos.module.css';
import { useAppContext } from '../../AppContext';

function Alunos() {
    const { data } = useAppContext();
    const [mediaPontuacao, setMediaPontuacao] = useState(null);

    const calcularMedia = () => {
        const totalGeral = data.alunosList.reduce((total, aluno) => total + aluno.pontuacao, 0);
        const media = totalGeral / data.alunosList.length;
        setMediaPontuacao(media);
    };
    
    return (
        <main className={styles.containerAlunos}>
            <Link to="/salaVirtual" className={styles.voltar}>
                <div className={styles.containerTitulo}>
                    <h2>VOLTAR</h2>
                </div>
            </Link>

            <button onClick={calcularMedia} className={styles.media}>
                <div className={styles.containerTitulo}>
                    <h2>CALCULAR MÉDIA DAS PONTUAÇÕES</h2>
                </div>
            </button>

            {mediaPontuacao !== null && (
                <div className={styles.containerTitulo}>
                    <h2>MÉDIA DAS PONTUAÇÕES: {mediaPontuacao.toFixed(2)}</h2>
                </div>
            )}

            <div className={styles.containerTitulo}>
                <h2>ALUNOS CADASTRADOS NA SALA</h2>
            </div>

            <div className={styles.containerCartoes}>
                {data.alunosList.map((aluno, index) => (
                    <div key={index} className={styles.itemCartao}>
                        <Link className={styles.linkCartao}>
                            <div className={styles.conteudoCartao}>
                                <h3>NOME: {aluno.nome}</h3>
                                <h3>EMAIL: {aluno.email}</h3>
                                <h3>SENHA: {aluno.senha}</h3>
                                <h3>PONTUAÇÃO: {aluno.pontuacao}</h3>
                            </div>
                        </Link>                
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Alunos;
