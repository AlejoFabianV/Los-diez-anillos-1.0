import React from "react";
import { NavLink } from 'react-router-dom'
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return(
        <nav>
            <ul className="holder">
                <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/tienda">Tienda</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/cuenta">Cuenta</NavLink></li>
            </ul>
        </nav>
    );
}
export default Nav;