import React from "react";
import Logos from "../layout/Logo.png";

import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import "./css/footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="">
              <img src={Logos} alt="" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Somos una empresa especializada en la fabricación y diseño de
            ventanas y puertas de alta calidad. Desde nuestra fundación en el
            año 2020, nos hemos dedicado a ofrecer soluciones elegantes y
            funcionales en ventanas de cristal, ventanas de aluminio, puertas
            polimetal y puertas corredizas.
          </p>
          <p>
            <br />
            Además, nuestra experiencia se extiende a la creación de gabinetes
            de aluminio y madera, brindando versatilidad y estilo a tus
            espacios.
          </p>
        </div>
        <div id="ctn" className="box">
          <h2 className="ctn">CONTACTOS</h2>
          <div className="red-social">
            <a href="https://www.instagram.com/instalacionescuevas.c/">
              <BsInstagram className="Ins" />
              <span>Instalaciones Cuevas</span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=8492711554">
              <IoLogoWhatsapp className="Whats" />
              <span>849-271-1554</span>
            </a>
            <a href="mailto:franklincuevas0505@gmail.com">
              <HiOutlineMail className="dm" />
              <span>franklincuevas0505@gmail.com</span>
            </a>
            <a className="calendar">
              <BiTimeFive className="tm" />
              <span>Lunes a sábados: 8:00am - 5:00pm</span>
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          &copy; 2023 <b>Instalaciones Cuevas.</b> Todos los Derechos
          Reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
