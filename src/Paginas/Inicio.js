import React from 'react';
import Header from '../Componentes/Header';
import Obras from '../Componentes/Obras';

// Importar componentes


export default function Inicio() {
    return (   

        <div className="inicio-container">
            <Header />

        <div className="galeria-container">
            <Obras />
        </div>  
    </div>
    )  
}