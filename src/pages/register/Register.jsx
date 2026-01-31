//Importamos Link para navegacón con React Router
import {link} from "react-router-dom";
//Utilizamos compoentes reutilizables
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

//Importamos los estilos 
import "./register.css";

//funcion 
export default function Register(){
    return(
        <>
        <Navbar/>
        
        <section className="register-container">
            <div className="register-container">

                <div className="register-left">
                    <h1>
                        Registro en <span>Nutrivida</span> 
                    </h1>

                    <p>Completa tus datos para crear una cuenta.</p>
                    <img src="images/saludable.jpg" alt="Nutrivida" />

                    <div className="register-right">
                        <h2>Crea tu cuenta </h2>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}