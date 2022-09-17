import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (porps) => {
    return(
        <main className="holder">
            <div className="carta">
                <img className="portada" src="img/Comics/Venom-01.jpg" alt="Venom 01" />
                <h3>Venom 01</h3>
                <h3>Rex</h3>
                <h4>$1100</h4>
            </div>
        </main>
    );
}
export default HomePage;