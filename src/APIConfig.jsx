/*const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Middleware para permitir CORS e lidar com JSON
app.use(cors());
app.use(express.json()); // Para interpretar JSON enviado nas requisições

// Banco de dados fictício
let professores = [];

// Endpoint para criar um novo professor
app.post('/professor', (req, res) => {
    // Recebe os dados do corpo da requisição
    const { nome_professor, email_professor, escola, idade } = req.body;

    // Verificando os dados recebidos
    console.log("Dados recebidos:", req.body);

    // Validação simples
    if (!nome_professor || !email_professor || !escola || !idade) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    // Criação do novo professor
    const newTeacher = {
        id_professor: professores.length + 1,  // ID simples baseado no tamanho atual
        nome_professor,
        email_professor,
        escola,
        idade
    };

    // Adiciona o professor ao "banco de dados"
    professores.push(newTeacher);
    console.log("Novo professor registrado:", newTeacher);

    // Retorna o professor criado com status 201 (Criado)
    res.status(201).json(newTeacher);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});*/
