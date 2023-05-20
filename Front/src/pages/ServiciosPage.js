import React from "react";
import "../styles/servicios.css";
const ServiciosPage = (props) => {
  return (
    <main className="holder">
      <h2>Servicios</h2>
      <div className="servicio">
        <img src="/img/snorlak.png" alt="impresora" />
        <div class="info">
          <h4>Impresion 3d</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            sapiente. Accusantium, distinctio, odio molestiae expedita hic quis,
            laborum facere quo repellat culpa eligendi iure. Excepturi porro
            natus dicta iure quidem.
          </p>
        </div>
      </div>
      <div className="servicio">
        <img src="/img/MATERA-GATO.jpg" alt="impresora" />
        <div className="info">
          <h4>Diseñado 3d</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            sapiente. Accusantium, distinctio, odio molestiae expedita hic quis,
            laborum facere quo repellat culpa eligendi iure. Excepturi porro
            natus dicta iure quidem.
          </p>
        </div>
      </div>
      <div className="servicio">
        <img src="/img/modelos-3d.jpg" alt="impresora" />
        <div className="info">
          <h4>Mantenimiento de impresoras</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            sapiente. Accusantium, distinctio, odio molestiae expedita hic quis,
            laborum facere quo repellat culpa eligendi iure. Excepturi porro
            natus dicta iure quidem.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ServiciosPage;
