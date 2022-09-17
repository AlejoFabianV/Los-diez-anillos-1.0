import React from "react";
import '../styles/components/pages/CuentaPage.css'

const CuentaPage = (props) => {
    return(
        <main className="holder">
        <div className="formulario">
            <h2>Cuenta</h2>
            <form action="">
                <p>
                    <label>Nombre de cuenta o Email</label>
                    <input type="text , email" />
                </p>
                <p>
                    <label>Contaseña</label>
                    <input type="password" />
                </p>
                <p>
                    <button className="boton-login">Login</button>
                    <br />
                    <br />
                    <button className="boton-register">Register</button>
                </p>
            </form>
        </div>
    </main>
    );
}
export default CuentaPage;