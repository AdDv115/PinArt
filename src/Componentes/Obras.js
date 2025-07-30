import React from "react";
import "../css/Obras.css";

const imagenes = [
  "Broken.jpg",
  "Chaqueta.jpg",
  "Collar.jpg",
  "Adan.jpg",
  "Exorcismo.jpg",
  "Hurt.jpg",
  "Libro.jpg",
  "Lovecraft.jpg",
  "Pain.jpg"
];

const Obras = () => {
  return (
    <div className="galeria-grid">
      {imagenes.map((src, i) => (
        <div className="galeria-item" key={i}>
          <img src={src} alt={`obra-${i}`} />
        </div>
      ))}
    </div>
  );
};

export default Obras;
