import React from "react";
import { Link } from "react-router-dom";
import "../../styles/layout.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              to="/nosotros"
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              to="/servicios"
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              to="/galeria"
            >
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              to="/novedades"
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <Link
              className={({ isActive }) => (isActive ? "activo" : undefined)}
              to="/contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
