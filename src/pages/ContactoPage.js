import React from "react";
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return(
        <main className="holder">
            <div className="formulario-contacto">
                <h2 className="texto-contacto">Contactanos y pregunta por tus comics/mangas favoritos</h2>
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
                <div className="contactoAlternativo">
                    <h3>Tambien podes contactarnos a traves de:</h3>
                    <ul className="mediosDeContacto">
                        <li>Whatshapp: 12345678 <i class="fa-brands fa-whatsapp"></i></li>
                        <li>Facbook: Los Diez Anillos <i class="fa-brands fa-facebook"></i></li>
                        <li>Instagram: @Los10Anillos <i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
export default ContactoPage;