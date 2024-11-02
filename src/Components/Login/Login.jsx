import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useAppContext } from "../../AppContext";

const Login = () => {
    const { registerStudent } = useAppContext(); 

    const handleRegister = () => {
        registerStudent(); 
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Cadastrar Aluno</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input type="text" placeholder="Nome" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Senha" />
                </div>
            </div>
            <div className="forgot-password">
                Mandar senha pelo email <span>Clique aqui!</span>
            </div>
            <div className="submit-container">
                <Link to="/" onClick={handleRegister}>
                    <button className="submit">Cadastrar</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;
