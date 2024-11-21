import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SalaNova.module.css';
import description from '../Assets/description.png';
import number from '../Assets/number.png';
import name from '../Assets/name.png';
import { useAppContext } from "../../AppContext";

function SalaNova() {
    const { createRoom } = useAppContext(); 

    const handleCreateRoom = () => {
        createRoom(); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Criar nova sala</div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={name} alt="Ícone do nome da sala" />
                    <input type="text" placeholder="Nome da sala" />
                </div>
                <div className={styles.input}>
                    <img src={description} alt="Ícone de descrição" />
                    <input type="text" placeholder="Descrição da sala" />
                </div>
            </div>
            <div className={styles.forgot_password}>
                É obrigatório cadastrar um aluno para a criação da sala
            </div>
            <div className={styles.submit_container}>
                <Link to="/" onClick={handleCreateRoom}>
                    <button className={styles.submit}>Criar</button>
                </Link>
            </div>
        </div>
    );
}

export default SalaNova;
