import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Clases.css";
export default function Classes() {
  return (
    <>
      <Navbar />

      {/* SECCIÓN DE CLASES */}
      <section className="classes-section">
        <h1>PROGRAMAS DISPONIBLES</h1>
        <p className="subtitle">
          Descubre nuestras clases y encuentra la que se adapta mejor a tu estilo de vida
        </p>

        <div className="class-container">

          <div className="class-card">
            <img src="/images/yoga.png" alt="Yoga" />
            <h3>Yoga</h3>
          </div>

          <div className="class-card">
            <img src="/images/guantes.png" alt="Boxeo" />
            <h3>Boxeo</h3>
          </div>

          <div className="class-card">
            <img src="/images/pilates.jpg" alt="Pilates" />
            <h3>Pilates</h3>
          </div>

          <div className="class-card">
            <img src="/images/masaMuscular.jpg" alt="Masa muscular" />
            <h3>Aumento de Masa Muscular</h3>
          </div>

          <div className="class-card">
            <img src="/images/Rehabilitacion.jpg" alt="Rehabilitación" />
            <h3>Rehabilitación</h3>
          </div>

          <div className="class-card">
            <img src="/images/culturismo.jpg" alt="Culturismo" />
            <h3>Culturismo</h3>
          </div>

        </div>
      </section>

      {/* CALENDARIO */}
      <section className="calendar-section">
        <h2>Calendario Semanal</h2>

        <table className="calendar-table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Clase</th>
              <th>Hora</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lunes</td>
              <td>Yoga</td>
              <td>08:00 - 09:00</td>
              <td>María López</td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>Boxeo</td>
              <td>10:00 - 11:00</td>
              <td>Juan Pérez</td>
            </tr>
            <tr>
              <td>Miércoles</td>
              <td>Pilates</td>
              <td>15:00 - 16:00</td>
              <td>Camila Torres</td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>Rehabilitación</td>
              <td>09:00 - 10:00</td>
              <td>Roberto Sánchez</td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>Culturismo</td>
              <td>18:00 - 19:00</td>
              <td>Carlos Rivera</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* AMIGOS */}
      <section className="friends-section">
        <h2>👥 Conecta con tus amigos</h2>

        <div className="friends-container">
          <div className="friend-card">
            <img src="/images/perfil.jpg" alt="Amigo 1" />
            <p>@JuanFit</p>
          </div>

          <div className="friend-card">
            <img src="/images/perfil.jpg" alt="Amigo 2" />
            <p>@LauraHealthy</p>
          </div>

          <div className="friend-card">
            <img src="/images/perfil.jpg" alt="Amigo 3" />
            <p>@CarlosGym</p>
          </div>
        </div>
      </section>

      {/* COMENTARIOS */}
      <section className="comments-section">
        <h2>Deja tu comentario</h2>

        <form className="comment-form">
          <textarea placeholder="Escribe tu opinión..." />
          <button type="button">Enviar</button>
        </form>
      </section>

      <Footer />
    </>
  );
}
