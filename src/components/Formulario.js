import React from "react";
import '../styles/_formulario.scss';

function Formulario(){
    return (
    <div>
        <p className="news">NEWSLETTER</p>
        <h3 className="sub">SUSCRIBETE</h3>
        <p className="novedad">Y enterate de todas las novedades</p>

    <form
  action="https://formspree.io/f/mvonqngl"
  method="POST"
>
  <label>
    <input type="email" name="email" placeholder="Ingresa tu email"/>
  </label>
  <button type="submit">Enviar</button>
</form>
</div>
    );
}
export default Formulario;