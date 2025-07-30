import React from 'react';
import {BrowserRouter, Route , Routes}from "react-router-dom";
import Aside from './Aside';
import Inicio from '../Paginas/Inicio';
import Perfil from '../Paginas/Perfil';

export default function App(){
    return(
        <BrowserRouter>
        <Aside />
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
        </BrowserRouter>
    )
}