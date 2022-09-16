import React from "react";

const CuentaPage = (props) => {
    return(
        <main class="holder">
        <div class="formulario">
            <h2>Cuenta</h2>
            <form action="">
                <p>
                    <label for="">Nombre de cuenta o Email</label>
                    <input type="text , email" />
                </p>
                <p>
                    <label for="">Contaseña</label>
                    <input type="password" />
                </p>
                <p>
                    <button class="boton-login">Login</button>
                    <hr />
                    <button class="boton-register">Register</button>
                </p>
            </form>
        </div>
    </main>
    );
}
export default CuentaPage;