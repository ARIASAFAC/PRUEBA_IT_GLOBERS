import React from "react";

function Products (){
  return (
    <div className="container">
      <div className="products1">
        <div className ="pRain">
          <img  
            src={require('../images/Rain.png')}
            alt='Rain'
            className="Rain"
          />
        </div>
        <div className ="pRain2">
        <img  
            src={require('../images/Rain2.png')}
            alt='Rain2'
            className="Rain2"
          />
          <h3 className="titulo">Pufi Rain</h3>
          <hr className="hr"/>
          <p className="p">Descripción del producto. Este es un texto simulado</p>
          <a className="a"  href="./"> Ver mas  </a>
        </div>
        </div>
      <div className="products2">
        <div className ="pPuff2">
        <img  
            src={require('../images/Puff2.png')}
            alt='Puff2'
            className="Puff2"
          />
          <h3 className="titulo">Pufi Puff</h3>
          <hr className="hr"/>
          <p className="p">Descripción del producto. Este es un texto simulado</p>
          <a className="a"  href="./"> Ver mas  </a>
        </div>
        <div className ="pPuff">
        <img  
            src={require('../images/Puff.png')}
            alt='Puff'
            className="Puff"
          />
        </div>
        </div>
      <div className="products3">
        <div className ="pCart">
        <img  
            src={require('../images/Cart.png')}
            alt='Cart'
            className="Cart"
          />
        </div>
        <div className ="pCart2">
        <img  
            src={require('../images/Cart2.png')}
            alt='Cart2'
            className="Cart2"
          />
          <h3 className="titulo">Pufi Cart</h3>
          <hr className="hr"/>
          <p className="p">Descripción del producto. Este es un texto simulado</p>
          <a className="a"  href="./"> Ver mas  </a>
        </div>
        </div>
      <div className="products4">
        <div className ="pNap2">
        <img  
            src={require('../images/Nap2.png')}
            alt='Nap2'
            className="Nap2"
          />
          <h3 className="titulo">Pufi Nap</h3>
          <hr className="hr"/>
          <p className="p">Descripción del producto. Este es un texto simulado</p>
          <a className="a"  href="./"> Ver mas  </a>
        </div>
        <div className ="pNap">
        <img  
            src={require('../images/Nap.png')}
            alt='Nap'
            className="Nap"
          />
        </div>
        </div>
        <p className="insta">INSTAGRAM</p>
        <h3 className="hashtag">#ESPUFI</h3>
    </div>
        
    )
}
export default Products;