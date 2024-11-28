import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import App2 from './App2';
import SalaNova from './Components/SalaNova/SalaNova';
import { AppProvider } from './AppContext'; 
import SalaVirtual from './Components/SalaVirtual/SalaVirtual';
import Alunos from './Components/Alunos/Alunos';
import EditarLogin from './Components/EditarLogin/EditarLogin';
import EditarSala from './Components/EditarSala/EditarSala';
import ExcluirLogin from './Components/ExcluirLogin/ExcluirLogin';

const App = () => {
  return (
    
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App2 />} />
          <Route path="/salaNova" element={<SalaNova />} />
          <Route path="/salaVirtual" element={<SalaVirtual />} />
          <Route path="/alunos" element={<Alunos />}/>
          <Route path="/editarLogin" element={<EditarLogin />}/>
          <Route path="/editar-sala/:id_sala" element={<EditarSala />} />  
          <Route path="/editar-login/:id_professor" element={<EditarLogin />} />
          <Route path="/excluirLogin" element={<ExcluirLogin />}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

