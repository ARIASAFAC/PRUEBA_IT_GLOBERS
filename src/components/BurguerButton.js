import React from "react";
import "../styles/_burguerButtton.scss"

function BurguerButton (props){
  return (
  <div onClick={props.handleClick} 
      className={`burguer-icon ${props.clicked ? 'open': ''}`}>
  <span></span>
  <span></span>
  <span></span>
</div>
  );
}

export default BurguerButton;