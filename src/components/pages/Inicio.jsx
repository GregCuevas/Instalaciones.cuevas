import React from "react";
import "./style/Inicio.css";
const Inicio = () => {
  return (
    <div className="container">
      <div className="left-div">
        <img
          className=""
          ancho=" 94 "
          alto=" 94 "
          src=" https://img.icons8.com/3d-fluency/94/worker-beard--v5.png "
          alt=" trabajador-barba--v5 "
        />
        <h1 className="title">Quienes Somos</h1>
        <p>
          En Instalaciones Cuevas, damos vida a tus sueños de tu hogar. Nuestro
          apasionado equipo de diseñadores y artesanos está dedicado a convertir
          tus ideas en realidades impresionantes.
        </p>
      </div>
      <div className="center-div">
        <img
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/user-group-man-woman--v2.png"
          alt="user-group-man-woman--v2"
        />
        <h1 className="title">Clientes</h1>
        <p>
          Proveemos soluciones innovadoras a nuestro clientes que excedan sus
          expectactivas garantizando su inversion brindandole toda la asesoria y
          respaldo para garantizar el exito de sus proyectos
        </p>
      </div>
      <div className="right-div">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-services-automotive-dealership-flaticons-flat-flat-icons.png"
          alt="external-services-automotive-dealership-flaticons-flat-flat-icons"
        />
        <h1 className="title">Servicios</h1>
        <p>
          Descubre la elegancia con closets personalizados, cristalería fina,
          gabinetes de cocina innovadores, despensas funcionales y espejos
          modernos por Instalaciones Cuevas.
        </p>
      </div>
    </div>
  );
};

export default Inicio;
