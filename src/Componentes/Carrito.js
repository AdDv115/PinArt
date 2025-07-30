import React from "react"
import '../css/carrito.css';

const Carrito = ({ showCartModal, setShowCartModal, cartItems }) => {
    return (
                        <div className={`carrito ${showCartModal ? "abierto" : ""}`}>
                            <div className="carritocontent">
                                
                                <button className="cerrar" onClick={() => setShowCartModal(false)}>X</button>
                        
                        <h3>Tu Carrito</h3>
                        
                        {cartItems.length === 0 ? (
                            <p>El carrito está vacío</p>
                        ) : (
                            <ul className="lista-carrito">
                                {cartItems.map(item => (
                                    <li key={item.id} className="item-carrito">
                                        <span>{item.name}</span>
                                        <span>${item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                        <button className="btn-comprar">
                            Proceder al Pago
                        </button>
                    </div>
                </div>
            )}
            
export default Carrito;