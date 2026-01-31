export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Contactos */}
          <div className="footer-section">
            <h4>Contactos</h4>
            <p>info@nutrivida.com</p>
            <p>+593 987 654 321</p>
          </div>

          {/* Horarios */}
          <div className="footer-section">
            <h4>Horarios</h4>
            <p>Lun - Vie: 08:00 - 18:00</p>
            <p>Sáb: 09:00 - 13:00</p>
          </div>

          {/* Redes Sociales */}
          <div className="footer-section">
            <h4>Redes</h4>
            <div className="social-row">
              <a href="#" className="social-link">
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
              <a href="#" className="social-link">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="#" className="social-link">
                <img src="/images/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2024 NutriVida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}