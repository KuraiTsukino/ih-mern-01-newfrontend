// Estado global o Store. Todos los componentes van a tener acceso a la información del estado global.
// La arquitectura no cambia, siempre es así, se le conoce como Flux. Está basada en 4 acciones.
// Su arquitectura es específica, arquitectura de Flux.

import { useReducer } from "react";
import GuitarContext from "./GuitarContext";
import GuitarReducer from "./GuitarReducer";

import axiosClient from "../../config/axios";

const GuitarState = (props) => {
  // Generar el estado global de las guitarrras, todo lo que tiene que ver con guitarras
  // 1a sección. Initial State o Estado inicial. Esto lo mandaremos en todos los componentes através del value del guitarContext.provider
  const initialState = {
    guitars: [],
    singleGuitar: {
      _id: "",
      nombre: "",
      descripcion: "",
      color: "",
      precio: "",
      imagen: ""
    },
    hola: "Mundo",
  };

  // 2a sección. Configuración de Reducer y creación de estado global.
  // Reducers son funciones que alteran el estado global.
  // El dispatch es un asistente, una acción que manda los datos a la función del Reducir, éste va a alterar el dato
  const [globalState, dispatch] = useReducer(GuitarReducer, initialState);

  // 3a sección. Funciones de cambio en estado global.
  const changeText = () => {
    dispatch({
      // Objeto conocido como action
      type: "CHANGE_TEXT",
      payload: "Estoy aprendiendo Context sin morir",
    });
  };

  const getGuitars = async () => {
    const res = await axiosClient.get("guitars/readall");
    console.log("Obteniendo guitarras...");
    console.log(res);

    const list = res.data.data;
    dispatch({
      type: "GET_GUITARS",
      payload: list,
    });
  };

  const getGuitar = async (guitarId) => {
    const res = await axiosClient.get(`guitars/readone/${guitarId}`)

    const selectedGuitar = res.data.data
    console.log(res)

    dispatch({
      type: "GET_GUITAR",
      payload: selectedGuitar
    })
  }

  const createGuitar = async (form) => {
    const res = await axiosClient.post("guitars/create", form)
    console.log(res)
  }

  // 4. Retorno.
  return (
    // Se necesita un proovedor para que de el acceso a los componentes al estado inicial de guitarras.
    <GuitarContext.Provider
      value={{
        guitars: globalState.guitars,
        hola: globalState.hola,
        singleGuitar: globalState.singleGuitar,
        changeText,
        getGuitars,
        getGuitar,
        createGuitar
      }}
    >
      {props.children}{" "}
      {/* Representación de todos los componentes, parecido a un Outlet en un estado global */}
    </GuitarContext.Provider>
  );
};

export default GuitarState;
