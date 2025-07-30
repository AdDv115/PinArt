import React from 'react';
import Obras from '../Componentes/Obras';
import '../css/perfil.css';
import editar from '../img/edit.png'

export default function Inicio() {
    return (   
    <div className="todo">
        <div className="Perfil-container">
            <div className="perfil">
                <h1 className="avatar">Pablo</h1>
                <img src="https://images7.memedroid.com/images/UPLOADED610/6507283185a88.webp" alt="Perfil" className="avatar-img" />
            </div> 
            <p className="perfil-descripcion">Artista apasionado por la pintura y el arte contemporáneo. Me encanta explorar nuevas técnicas y estilos para expresar mi creatividad.</p>
            <img src={editar} alt="editar" className="iconoEdit"/>
        </div>

        <div className="galeria-container">
            <Obras />
        </div>  
        </div>
    )  
}