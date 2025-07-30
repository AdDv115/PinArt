import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/Aside.css';
import Login from "./Login";
import Carrito from "./Carrito";

// Importar iconos
import homeIcon from '../img/home.png';
import perfilIcon from '../img/user.png';
import CartIcon from '../img/cart.png';
import InfoIcon from '../img/info.png';

const Aside = () => {

    // Estado para el Login
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showModal, setShowModal] = useState(false);

    // Estados para el carrito
    const [showCartModal, setShowCartModal] = useState(false);
    const [cartItems] = useState([]);

    const LoginAbierto = () => {
        setShowCartModal(false);
        setShowModal(true);
    };

    const CarritoAbierto = () => {
        setShowModal(false);
        setShowCartModal(true);
    };

    return (
        <aside className="aside">
            <nav className="contenido">
                <Link to="/" className="botonnav">
                    <img src={homeIcon} alt="Inicio" className="icono" />
                </Link>
                
               <div className="botonnav" onClick={() =>{
                console.log('Estado de login al hacer clic:', isLoggedIn);
                
                isLoggedIn ? window.location.href = "/perfil" : LoginAbierto();
            
               }}>           
               <img src={perfilIcon} alt="Perfil" className="icono" />
               </div> 

                <div className="botonnav" onClick={() => CarritoAbierto()}>
                    <img src={CartIcon} alt="Carrito" className="icono" />
                </div>

                <Link to="/nosotros" className="botonnav">
                    <img src={InfoIcon} alt="Nosotros" className="icono" />
                </Link>
            </nav>

            <Login
                showModal={showModal}
                setShowModal={setShowModal}
                onLoginSuccess={() => setIsLoggedIn(true)}
            />

            <Carrito
                showCartModal={showCartModal}
                setShowCartModal={setShowCartModal}
                cartItems={cartItems}
            />
        </aside>
    )
}

export default Aside;