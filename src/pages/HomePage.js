import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (porps) => {
    return(
        <main className="holder">
            <section>
                <h2>Novedades</h2>
                <div className="carta">
                    <img className="portada" src="img/Comics/Venom-01.jpg" alt="Venom 01" />
                    <h3>Venom 01</h3>
                    <h3>Rex</h3>
                    <h4>$1100</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Comics/Avengers-llegada-del-fenix.jpg" alt="Avengers 06-llegada-del-fenix" />
                    <h3>Avengers 06</h3>
                    <h3>La llegada del fenix</h3>
                    <h4>$1400</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Comics/cap-america-todos-mueren-jovenes.jpg" alt="capitan america 04" />
                    <h3>Capitan America 04</h3>
                    <h3>Todos mueren jovenes</h3>
                    <h4>$1100</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Comics/miles-morales01.jpg" alt="miles morales 01" />
                    <h3>Miles Morales 01</h3>
                    <h3>Spider-Man</h3>
                    <h4>$2000</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Manga/dr.stone-17.jpg" alt="dr.stone-17" />
                    <h3>Dr.Stone 17</h3>
                    <h3>Riichiro Inagaki</h3> 
                    <h4>$1100</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Manga/naruto-10.jpg" alt="naruto-10" />
                    <h3>Naruto 10</h3>
                    <h3>Masashi Kishimoto</h3>
                    <h4>$1100</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Comics/xmen-15-amenecer-p11.jpg" alt="x-men amanecer x parte 11" />
                    <h3>X-men 15</h3>
                    <h3>Amanecer x parte 11</h3>
                    <h4>$1300</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Comics/venom-06.jpg" alt="venom-06 isla Venom" />
                    <h3>Venom 06</h3>
                    <h3>Isla Venom</h3>
                    <h4>$1100</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Manga/berserk-30.jpg" alt="berserk-30" />
                    <h3>Berserk 30</h3>
                    <h3>Kentaro Kiura</h3>
                    <h4>$1100</h4>
                </div>
                <div className="carta">
                    <img className="portada" src="img/Manga/fire-force-15.jpg" alt="fire-force-15" />
                    <h3>Fire Force 15</h3>
                    <h3>Atsushi Ohkubo</h3> 
                    <h4>$1100</h4>
                </div>
            </section>
        </main>
    );
}
export default HomePage;