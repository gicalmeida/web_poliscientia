import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SalaEspecifica.module.css';

function SalaEspecifica() {
    
    return (
        <main className={styles.alunosContainer}>
            <Link to="/salaVirtual" className={styles.voltarLink}>
                <div className={styles.tituloContainer}>
                    <h2>VOLTAR</h2>
                </div>
            </Link>

            <div className={styles.tituloContainer}>
                <h2>DINÂMICAS SELECIONADAS NA SALA</h2>
            </div>

            <div className={styles.cartoesContainer}>
                <div className={styles.cartaoItem}>
                    <Link className={styles.cartaoLink}>
                        <div className={styles.cartaoConteudo}>
                            <h3>JOGO</h3>
                        </div>
                    </Link>                
                </div>
                <div className={styles.cartaoItem}>
                    <Link className={styles.cartaoLink}>
                        <div className={styles.cartaoConteudo}>
                            <h2>DEMOCRACIA</h2>
                            <h2>ELEIÇÃO</h2>
                            <h2>MANDATO</h2>
                            <h2>PARTIDO</h2>
                            <h2>ALIENAÇÃO</h2>
                            <h2>CONSERVADORISMO</h2>
                            <h2>IDEOLOGIA</h2>
                            <h2>ANARQUISMO</h2>
                            <h2>CAPITALISMO</h2>
                            <h2>SOCIALISMO</h2>
                            <h2>COMUNISMO</h2>
                            <h2>LIBERALISMO</h2>
                            <h2>MONARQUIA</h2>
                            <h2>ESQUERDA</h2>
                            <h2>DIREITA</h2>
                            <h2>FASCISMO</h2>
                            <h2>NAZISMO</h2>
                            <h2>ARISTOCRACIA</h2>
                            <h2>DITADURA</h2>
                            <h2>CENSURA</h2>
                            <h2>REPRESSÃO</h2>
                            <h2>CORRUPÇÃO</h2>
                            <h2>NEPOTISMO</h2>
                            <h2>DEMAGOGIA</h2>
                            <h2>ESTADO</h2>
                            <h2>PARLAMENTARISMO</h2>
                            <h2>PRESIDENCIALISMO</h2>
                            <h2>IMPEACHMENT</h2>
                            <h2>REPÚBLICA</h2>
                            <h2>REFERENDO</h2>
                        </div>
                    </Link>                
                </div>
               
            </div>
        </main>
    );
}

export default SalaEspecifica;
