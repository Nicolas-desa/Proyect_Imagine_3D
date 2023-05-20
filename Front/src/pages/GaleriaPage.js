import React from "react";
import "../styles/galeria.css";
const GaleriaPage = (props) => {
  return (
    <main className="holder">
      <div className="galeria">
        <h1>Galeria de impresiones</h1>
        <div className="linea"></div>
        <div className="contenedor-imagenes">
          <div className="imagen">
            <img src="img/IMG_20201106_155353884.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
          <div className="imagen">
            <img src="img/IMG-20200913-WA0068.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
          <div className="imagen">
            <img src="img/IMG-20200913-WA0070.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
          <div class="imagen">
            <img src="img/IMG-20200927-WA0025.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
          <div className="imagen">
            <img src="img/IMG-20200927-WA0045.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
          <div className="imagen">
            <img src="img/IMG-20201012-WA0030.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
          <div className="imagen">
            <img src="img/IMG-20201012-WA0032.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
          <div className="imagen">
            <img src="img/IMG-20211005-WA0034.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
          <div className="imagen">
            <img src="img/IMG_20210921_143942079.jpg" alt="" />
            <div className="overlay">
              <h2>Imagine_3D</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GaleriaPage;
