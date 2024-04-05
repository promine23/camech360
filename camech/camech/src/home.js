import React from 'react';
import Barra from './Barra';
import facebook1 from './facebook1.png';
import instagram2 from './instagram2.png';
import twitter3 from './twitter3.png';

function Home({setUser}) {

    const handleLogout = () =>{
        setUser([])
    }
    return (
        <div>
            <header>
                <h1>Bienvenido a nuestro sitio informativo</h1>
                <button onClick={handleLogout}>Cerrar sesion</button>

                <nav>
                    <br /> <br /><br />
                </nav>
                <h2></h2>
                <Barra />
            </header>

            <footer>
                <div>
                    <h3>Contáctanos</h3>
                    <p>Número de teléfono: 8124305287</p>
                    <p>Correo electrónico: 20974@virtual.utsc.edu.mx</p>
                    <p>Redes sociales:</p>
                    <ul className="sci">
                        <li>
                            <a href="#"><img src={instagram2} alt="Instagram" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={twitter3} alt="Twitter" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={facebook1} alt="Facebook" /></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Home;
