import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TasksForm from'./pages/Tasks/forms';
import TasksDetail from'./pages/Tasks/Detail';

const Rotas: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tarefas" element={<Tasks/>} />
            <Route path="/tarefas_cadastro" element ={<TasksForm/>} /> 
            <Route path="/tarefas_cadastro/:id" element ={<TasksForm/>} />
            <Route path="/tarefas/:id" element={<TasksDetail/>} /> 
        </Routes>
    );
}

export default Rotas;
