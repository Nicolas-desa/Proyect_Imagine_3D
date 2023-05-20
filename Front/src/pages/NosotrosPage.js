import React from "react";
import "../styles/nosotros.css";
const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="historia">
        <h1>Historia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis
          repudiandae unde tenetur accusamus quod voluptatibus mollitia!
          Veritatis iusto quia aspernatur quis quisquam ut iure minima neque
          reprehenderit, aliquid laudantium?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          possimus a ab, dignissimos asperiores laudantium repellat ratione
          illum commodi doloribus consequatur alias aliquid adipisci quo hic
          quis voluptatem necessitatibus et.
        </p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <img src="img/staff1.png" alt="nico" />
            <h5>Nicolas Torres</h5>
            <h6>Fundador</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              illo rem quasi odio itaque aliquam eligendi animi, nisi cum ad
              quod facilis harum quisquam quidem nemo sunt quia rerum voluptas.
            </p>
          </div>
          <div className="persona">
            <img src="img/staff2.png" alt="nico" />
            <h5>Luciana Ibanez</h5>
            <h6>fundadora</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              illo rem quasi odio itaque aliquam eligendi animi, nisi cum ad
              quod facilis harum quisquam quidem nemo sunt quia rerum voluptas.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
