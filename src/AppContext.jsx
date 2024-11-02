import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState({
        alunos: 300,
        salasCriadas: 12,
        acertos: '57%',
        erros: '43%',
        chartData: [
            { name: 'Questão 01', er: 4000, ac: 2400, amt: 2400 },
            { name: 'Questão 02', er: 3000, ac: 1398, amt: 2210 },
            { name: 'Questão 03', er: 2000, ac: 9800, amt: 2290 },
            { name: 'Questão 04', er: 2780, ac: 3908, amt: 2000 },
            { name: 'Questão 05', er: 1890, ac: 4800, amt: 2181 },
            { name: 'Questão 06', er: 2390, ac: 3800, amt: 2500 },
            { name: 'Questão 07', er: 3490, ac: 4300, amt: 2100 },
        ],
        salas: [
            {
                id: 1,
                nome: "1° INFORMÁTICA",
                ano: "1° ANO TÉCNICO EM INFORMÁTICA",
                alunos: 32
            },
            {
                id: 2,
                nome: "2° INFORMÁTICA",
                ano: "2° ANO TÉCNICO EM INFORMÁTICA",
                alunos: 42
            },
            {
                id: 3,
                nome: "3° INFORMÁTICA",
                ano: "3° ANO TÉCNICO EM INFORMÁTICA",
                alunos: 38
            },
            {
                id: 4,
                nome: "1° MECÂNICA",
                ano: "1° ANO TÉCNICO EM MECÂNICA",
                alunos: 35
            },
            {
                id: 5,
                nome: "2° MECÂNICA",
                ano: "2° ANO TÉCNICO EM MECÂNICA",
                alunos: 39
            },
            {
                id: 6,
                nome: "3° MECÂNICA",
                ano: "3° ANO TÉCNICO EM MECÂNICA",
                alunos: 34
            },
            {
                id: 7,
                nome: "1° ELETROELETRÔNICA",
                ano: "1° ANO TÉCNICO EM ELETROELETRÔNICA",
                alunos: 37
            },
            {
                id: 8,
                nome: "2° ELETROELETRÔNICA",
                ano: "2° ANO TÉCNICO EM ELETROELETRÔNICA",
                alunos: 39
            },
            {
                id: 9,
                nome: "3° ELETROELETRÔNICA",
                ano: "3° ANO TÉCNICO EM ELETROELETRÔNICA",
                alunos: 36
            }
        ],
        alunosList: [
            { id: 1, nome: "ALUNO 1", email: "aluno1@gmail.com", senha: "********", pontuacao: 395 },
            { id: 2, nome: "ALUNO 2", email: "aluno2@gmail.com", senha: "********", pontuacao: 450 },
            { id: 3, nome: "ALUNO 3", email: "aluno3@gmail.com", senha: "********", pontuacao: 320 },
            { id: 4, nome: "ALUNO 4", email: "aluno4@gmail.com", senha: "********", pontuacao: 210 },
            { id: 5, nome: "ALUNO 5", email: "aluno5@gmail.com", senha: "********", pontuacao: 510 },
            { id: 6, nome: "ALUNO 6", email: "aluno6@gmail.com", senha: "********", pontuacao: 460 },
            { id: 7, nome: "ALUNO 7", email: "aluno7@gmail.com", senha: "********", pontuacao: 140 },
            { id: 8, nome: "ALUNO 8", email: "aluno8@gmail.com", senha: "********", pontuacao: 530 },
            { id: 9, nome: "ALUNO 9", email: "aluno9@gmail.com", senha: "********", pontuacao: 110 },
            { id: 10, nome: "ALUNO 10", email: "aluno10@gmail.com", senha: "********", pontuacao: 230 },
            { id: 11, nome: "ALUNO 11", email: "aluno11@gmail.com", senha: "********", pontuacao: 420 },
            { id: 12, nome: "ALUNO 12", email: "aluno13@gmail.com", senha: "********", pontuacao: 150 },
            { id: 13, nome: "ALUNO 13", email: "aluno13@gmail.com", senha: "********", pontuacao: 310 },
            { id: 14, nome: "ALUNO 14", email: "aluno14@gmail.com", senha: "********", pontuacao: 550 },
            { id: 15, nome: "ALUNO 15", email: "aluno15@gmail.com", senha: "********", pontuacao: 180 },
        ],
    });

    const registerStudent = () => {
        setData(prevData => ({
            ...prevData,
            alunos: prevData.alunos + 1
        }));
    };

    const createRoom = () => {
        setData(prevData => ({
            ...prevData,
            salasCriadas: prevData.salasCriadas + 1
        }));
    };

    return (
        <AppContext.Provider value={{ data, registerStudent, createRoom }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
