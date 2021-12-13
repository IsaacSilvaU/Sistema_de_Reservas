import React from "react";

function Persona({persona}){
    const {nombre, password, username}= persona; //Extraer de la bd
    return (
      <div>
        <p>
          {nombre} {password}
          <br />
          {(username)}
        </p>
      </div>
    );
} 

export default Persona;