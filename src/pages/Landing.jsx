import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero container mt-5 pt-5">
        <div className="row align-items-center">
          <div className="col-md-6 hero-text">
            <h1>VIVE MEJOR</h1>
            <p>Transforma tu alimentación...</p>
            <Link to="/about" className="btn btn-primary btn-lg">
              Conoce más
            </Link>
          </div>

          <div className="col-md-6 hero-img text-center">
            <img
              src="/images/saludable.jpg"
              className="img-fluid rounded"
              alt="Vida saludable"
            />
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section className="programs container my-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <img
                src="/images/balance.jpg"
                className="card-img-top"
                alt="Fuel & Balance"
              />
              <div className="card-body">
                <h5 className="card-title">Fuel & Balance</h5>
                <p className="card-text">Optimiza tu energía...</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 text-center">
              <img
                src="/images/train y power.jpg"
                className="card-img-top"
                alt="Train & Power"
              />
              <div className="card-body">
                <h5 className="card-title">Train & Power</h5>
                <p className="card-text">Rutinas personalizadas...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIENVENIDA */}
      <section className="welcome text-center py-5">
        <h2>
          <span className="text-success">BIENVENIDO</span> AL EQUIPO
        </h2>
        <p className="mt-3">
          Tu cambio empieza hoy. Alimentación, disciplina y constancia.
        </p>
      </section>

      {/* IMC ESTÁTICO */}
      <section className="imc-section text-center py-5">
        <h2>Calcula tu IMC</h2>
        <p>Herramienta disponible próximamente</p>
      </section>

      {/* JOIN */}
      <section className="join text-center py-5">
        <h3>ÚNETE A NUTRI•VIDA HOY</h3>
        <Link to="/register" className="btn btn-success btn-lg">
          Registrarme
        </Link>
      </section>

      <Footer />
    </>
  );
}
