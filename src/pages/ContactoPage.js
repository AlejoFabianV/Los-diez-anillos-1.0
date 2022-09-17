import React from "react";
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return(
        <main className="holder">
        <div className="formulario">
            <h2 className="texto-contacto">Contactanos y pregunta por tus comics/mangas favoritos!!</h2>
            <form action="">
                <p>
                    <label>Nombre</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Email</label>
                    <input type="email" />
                </p>
                <p>
                    <label>Mensaje</label>
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