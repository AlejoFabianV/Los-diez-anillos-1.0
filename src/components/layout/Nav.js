import React from "react";
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return(
        <nav>
            <ul className="holder">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tienda">Tienda</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/cuenta">Cuenta</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;