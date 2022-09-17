import React from "react";
import '../styles/components/pages/TiendaPage.css'

const TiendaPage = (props) => {
    return(
        <main className="holder-tienda">
            <section>
                <h2>Comics</h2>
            <div className="carta">
                <img className="portada" src="img/Comics/Avengers-llegada-del-fenix.jpg" alt="Avengers 06-llegada-del-fenix" />
                <h3>Avengers 06</h3>
                <h3>La llegada del fenix</h3>
                <h4>$1400</h4>
            </div>
            </section>
            <section>
                <h2>Manga</h2>
                <div className="carta">
                <img className="portada" src="img/Manga/jujutsu-kaisen-11.jpg" alt="jujutsu-kaisen-11" />
                <h3>Jujutsu Kaisen 11</h3>
                <h3>Gege Akutami</h3>
                <h4>$1100</h4>
            </div>
            </section>
        </main>
    );
}
export default TiendaPage;