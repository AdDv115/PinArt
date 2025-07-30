import React, { useState } from "react";
import '../css/Login.css';

const Login = ({ showModal, setShowModal }) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticación aquí
        setShowModal(false);
    };

    return (
        <div className={`login ${showModal ? "abierto" : ""}`}>
            <div className="loginContent">
                <button className="cerrar" onClick={() => setShowModal(false)}>X</button>
                
                <h3>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h3>
                
                <form onSubmit={handleAuthSubmit}>
                    {!isLogin && (
                        <input 
                            type="text" 
                            placeholder="Nombre completo" 
                            required 
                        />
                    )}
                    <input 
                        type="email" 
                        placeholder="Correo electrónico" 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        required 
                    />
                    <button type="submit" className="btnLR">
                        {isLogin ? "Ingresar" : "Registrarse"}
                    </button>
                </form>

                <p className="inicio-registro">
                    {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Regístrate" : "Inicia sesión"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;