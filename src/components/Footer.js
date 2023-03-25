import React from "react";
import '../styles/_footer.scss';
import fb from'../images/fb.png';
import twitter from'../images/twitter.png';
import insta from'../images/insta.png';

function Footer(){
  return (
  <div className="footer"> 
    <div className="sb__footer section__padding">
      <div className="sb__footer-links">
      <div className="sb_footer-links_div">
          <h3><span>Pufi</span></h3>
        </div>
        <div className="sb_footer-links_div">
          <a href="./">
            Pufi Rain
          </a>
        
          <a href="./">
            Pufi Puff
          </a>
        
          <a href="./">
            Pufi Cart
          </a>
        
          <a href="./">
            Pufi Nap
          </a>
        </div>
      <div className="sb_footer-links_div">
        <a href="./">
          CONTACTO
        </a>
        <a href="./">
          AYUDA
        </a>
        <a href="./">
          CÓMO COMPRAR
        </a>
        <a href="./">
          TÉRMINOS & CONDICIONES
        </a>
        </div>
      <div className="sb_footer-links_div">
        <a>
          SEGUINOS EN 
        </a>
        <div className="socialMedia">
        <p>
          <img className="compra" src={require('../images/compra.png')} alt=""></img>
        </p>
        </div>
      </div>
      <div className="sb_footer-links_div">
        <a>SEGUINOS EN</a>
        <div className="socialMedia">
          <p><img src={fb} alt=""/></p>
          <p><img src={twitter} alt=""/></p>
          <p><img src={insta} alt=""/></p>
        </div>
      </div>
    </div>
  
      <hr className="hr1"></hr>

      <div className="Sb__footer-below">
        <div className="sb__footer_copyright">
          <p className="cpr">
            PUFI Copyright 2017 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Footer;