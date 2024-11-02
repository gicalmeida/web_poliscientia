import React from 'react';
import '../../App2.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useAppContext } from '../../AppContext'; 

function Home() {
    const { data } = useAppContext(); 

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>VISÃO GERAL - PROFESSOR</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALUNOS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>{data.alunos}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>SALAS CRIADAS</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>{data.salasCriadas}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ACERTOS</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>{data.acertos}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ERROS</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>{data.erros}</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data.chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="ac" fill="#aae47c" />
                        <Bar dataKey="er" fill="#b63f3f" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data.chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="ac" stroke="#aae47c" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="er" stroke="#b63f3f" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;
