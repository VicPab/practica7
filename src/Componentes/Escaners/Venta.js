import React from "react";
import "./Escaners.css";
import { Link } from "react-router-dom";
//El nombre Escaners puede ser diferente
export default function Venta() {
  return (
    <div className="fondoEscaners">
      <h1> Formulario de contactos </h1>
      <Link to="/"> Volver a la pagina principal </Link>
    </div>
  );
}
