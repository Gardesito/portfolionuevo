import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="encabezado">
        <nav className="navegacion">
          <ul>
            <li>
              <a href="#"></a>Inicio
            </li>
            <li>
              <a href="#"></a>Sobre mi
            </li>
            <li>
              <a href="#"></a>Tecnologias
            </li>
            <li>
              <a href="#"></a>Certificados
            </li>
            <li>
              <a href="#"></a>Contacto
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
