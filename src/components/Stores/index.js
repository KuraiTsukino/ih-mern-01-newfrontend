import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../../context/Store/StoreContext";

export default function Store() {
  // Estado global.
  const ctx = useContext(StoreContext);

  const { stores, hola, changeText, getStores } = ctx;

  // Estado local

  return (
    <>
      <p>Listado de tiendas</p>
      {/*<p>{ hola }</p>

            <button onClick={ () => { changeText() }}>
                Cambiar texto
            </button> */}

      <button
        onClick={() => {
          getStores();
        }}
      >
        Listar tiendas
      </button>

      <div>
        <h2>Listado de Tiendas</h2>
        <ul>
          {stores.map((element) => {
            return (
              <li key={element._id}>
                <Link to={`/stores/${element._id}`}>
                  <p>{element.domicilio}</p>
                </Link>
                <p>{element.telefono}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
