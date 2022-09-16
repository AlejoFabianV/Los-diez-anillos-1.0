import React from "react";

const ContactoPage = (props) => {
    return(
        <main class="holder">
        <div class="formulario">
            <h2 class="texto-contacto">Contactanos y pregunta por tus comics favoritos!!</h2>
            <form action="">
                <p>
                    <label for="">Nombre</label>
                    <input type="text" />
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="email" />
                </p>
                <p>
                    <label for="">Mensaje</label>
                    <textarea name="" id="" cols="30" rows="10" />
                </p>
                <p>
                    <input type="submit" />
                </p>
            </form>
        </div>
    </main>
    );
}
export default ContactoPage;