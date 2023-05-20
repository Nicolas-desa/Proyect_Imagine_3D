import React from "react";
import "../styles/home.css";
const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="img/img-home.jpg" alt="impresora3d" />
      </div>

      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
            eos. Possimus obcaecati, voluptatem porro temporibus reprehenderit
            numquam molestiae dolore at deserunt quaerat laboriosam nulla quas
            totam quasi velit. Exercitationem, unde!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
            eos. Possimus obcaecati, voluptatem porro temporibus reprehenderit
            numquam molestiae dolore at deserunt quaerat laboriosam nulla quas
            totam quasi velit. Exercitationem, unde!
          </p>
        </div>

        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Simplemente excelentes</span>
            <span className="autor">Lara Torres</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
