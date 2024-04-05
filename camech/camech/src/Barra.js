import React from 'react';
import './Barra.css';
import imagenCamech from './imagentarjeta.png'; // Importa la imagen
import carro from './carro.jpeg';
import logo from './logo.jpg'; // Importa la imagen de la tercera tarjeta



function Barra() {
    
    return (
        
        <div className="tarjeta-container">
            {/* Primera tarjeta */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                <div className="card">
                    <img src={imagenCamech} alt="Imagen de Camech 360" className="card-img-top" style={{ width: '200px' }} /> {/* Inserta la imagen */}
                    <div className="card-body">
                        <h1 className="card-title">Camech 360 seguridad 360</h1>
                        <p className="card-text">
                            Camech 360 es un inovador robot equipado con una cámara de 360 grados que garantiza la seguridad en diversas situaciones. 
                        </p>
                    </div>
                </div>
            </div>

            {/* Segunda tarjeta */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                <div className="card">
                    <img src={carro} alt="carro" className="card-img-top" style={{ width: '200px' }} /> {/* Inserta la imagen de la nueva tarjeta */}
                    <div className="card-body">
                        <h1 className="card-title">Facil de manejar</h1>
                        <p className="card-text">
                            Es muy facil manupular el robot lo cual permitira un mejor manejo y pueda complir su funcion de mejor manera
                        </p>
                    </div>
                </div>
            </div>

            {/* Tercera tarjeta (nueva) */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                <div className="card">
                    <img src={logo} alt="logo" className="card-img-top" style={{ width: '200px' }} /> {/* Inserta la imagen de la tercera tarjeta */}
                    <div className="card-body">
                        <h1 className="card-title">Sobre nosotros</h1>
                        <p className="card-text">
                            Nuestro proyecto fue pensado para facilitar la labor de vigilancia tanto para el hogar como a nivel laboral, es muy simple de usar y creemos que puede ser de gran ayuda o incluso si lo quieres tomar como un objeto de ocio y  demás
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Barra;
