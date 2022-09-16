import React from "react";

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
                    <button className="boton-register">Register</button>
                </p>
            </form>
        </div>
    </main>
    );
}
export default CuentaPage;