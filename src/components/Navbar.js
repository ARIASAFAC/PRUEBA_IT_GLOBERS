import React, {useState} from "react";
import "../styles/_navbar.scss"
import { connect } from "react-redux";
import BurguerButton from "./BurguerButton";

function Navbar () {

  const [clicked, setClicked] = useState(false)
  console.log(clicked)
  const handleClick = () => {
    // si está en true cambia a false y de (F a T) 
    setClicked(!clicked)
  }

  return(    
    <div className= 'navbar'>
      <a HREF='./'><h1>Pufi</h1></a>
      <div className={`icon ${clicked ? 'active' : ''}`}>
        <li>
          <a
            href='/'>
              <img 
              src={require('../images/icon_1.png')}
              alt='icon_1'
              className="iconn"
              />
            PUFI PUFF
          </a>
          
        </li>
        <hr className="hr"/>
        <li>
          <a 
            href='/'>
              <img 
              src={require('../images/icon_2.png')}
              alt='icon_1'
              className="iconn"
              />
            PUFI RAIN
          </a>
        </li>
        <hr className="hr"/>
        <li>
        <a href='/'>
        <img 
              src={require('../images/icon_3.png')}
              alt='icon_1'
              className="iconn"
              />
          PUFI CART</a>
        </li>
        <hr className="hr"/>
        <li>
        <a href='/'>
        <img 
              src={require('../images/icon_4.png')}
              alt='icon_1'
              className="iconn"
              />
          PUFI NAP</a>
        </li>
      </div>
      <div className={`icon2 ${clicked ? 'active' : ''}`}>
        <a href='/'>MI CUENTA</a>
        <a href='/'>MI COMPRA</a>
      </div>
      <div className='icon-burguer'>
      <BurguerButton clicked = {clicked} handleClick={handleClick}/>
      </div>
    </div>
    );
}

const mapStateToProps = state =>({
  Navbar: state.navbar
})

export default connect (mapStateToProps, {}) (Navbar);




















{/* <header className="Iconos">
<img 
  className="icono"
  src={require(`../images/icon_${props.icon_0}.png`)}
  alt={`icono_${props.icon_0}`}
/>
<img 
  className="icono"
  src={require(`../images/icon_${props.icon_1}.png`)}
  alt={`icono_${props.icon_1}`}
/>
<img 
  className="icono"
  src={require(`../images/icon_${props.icon_2}.png`)}
  alt={`icono_${props.icon_2}`}
/>
<img 
  className="icono"
  src={require(`../images/icon_${props.icon_3}.png`)}
  alt={`icono_${props.icon_3}`}
/>
<img 
  className="icono"
  src={require(`../images/icon_${props.icon_4}.png`)}
  alt={`icono_${props.icon_4}`}
/>

</header>   */}