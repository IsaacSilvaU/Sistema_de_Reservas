import React, { useState, useEffect } from "react";
import Persona from "./dbpersona";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Listado() {
  const [personas, setPersonas] = useState([]);
  const documentos = [];

  const leerPersonas = async () => {
    try {
      const query = await getDocs(collection(db, "formulario")); // Obtengo los documentos de la base de datos
      query.forEach((doc) => {
        documentos.push({ id: doc.id, ...doc.data() }); //hacemos una copia de toda la base (los 3 puntos) y agregamos una llave valor al id ya que no tiene llave (id: doc.id).
      });
      setPersonas(documentos);
    } catch (error) {
      console.log(error);
    }
  };

  const crearPersonas = async () => {
    //const formu = JSON.parse(localStorage.getItem("todos2"));
    const formu = localStorage.getItem("todos2");
    const formulario = formu.split("body")[1].split(":[")[1].split(",");
    console.log(formulario);
    try {
      const docRef = await addDoc(collection(db, "formulario"), {
        nombre: formulario[0],
        apellido: formulario[1],
        telefono: formulario[2],
        correo: formulario[3],
        habInd: formulario[4],
        habDob: formulario[5],
        habTri: formulario[6],
        habCua: formulario[7],
        habSuite: formulario[8],
      });

      documentos.push({ id: docRef.id, ...docRef.data() }); //hacemos una copia de toda la base (los 3 puntos) y agregamos una llave valor al id ya que no tiene llave (id: doc.id).

      setPersonas(documentos);

      /*console.log(docRef);
      console.log(documentos); */
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //El useEffect se usa para renderizar en la páginas los cambios que detecte en el elemento a monitorizar
    leerPersonas();
  }, [personas]); //Personas es el estado a monitorizar para ver los combios

  return (
    <div>
      {personas.map((persona) => (
        <Persona key={persona.id} persona={persona} />
      ))}
      <button onClick={crearPersonas}>crear</button>
    </div>
  );
}

export default Listado;
