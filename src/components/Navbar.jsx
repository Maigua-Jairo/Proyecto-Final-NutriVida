import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          NUTRI<span className="text-success">•VIDA</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre Nosotros</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/clases">Clases</Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-success ms-lg-3" to="/register">
                Registro
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
