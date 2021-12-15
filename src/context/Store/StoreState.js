// Estado global o Store. Todos los componentes van a tener acceso a la información del estado global.
// La arquitectura no cambia, siempre es así, se le conoce como Flux. Está basada en 4 acciones.
// Su arquitectura es específica, arquitectura de Flux.

import { useReducer } from "react";
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer";

import axiosClient from "../../config/axios";

const StoreState = (props) => {

    // Generar el estado global de las guitarrras, todo lo que tiene que ver con guitarras
    // 1a sección. Initial State o Estado inicial. Esto lo mandaremos en todos los componentes
    const initialState = {
        stores: [],
        singleStore: {
            _id: "",
            domicilio: "",
            telefono: ""
        },
        hola: "Mundo"
    }

    // 2a sección. Configuración de Reducer y creación de estado global.
    const [globalState, dispatch] = useReducer(StoreReducer, initialState)

    // 3a sección. Funciones de cambio en estado global.
    const changeText = () => {
        
        dispatch({ // Objeto conocido como action
            type: "CHANGE_TEXT",
            payload: "Estoy aprendiendo Context sin morir"
        })
    }

    const getStores = async () => {
        const res = await axiosClient.get("stores/readall")
        console.log("Obteniendo tiendas...");
        console.log(res)

        const list = res.data.data
        dispatch({
            type: "GET_STORES",
            payload: list,
        })
    }

    const getStore = async (storeId) => {
        const res = await axiosClient.get(`stores/readone/${storeId}`)
        
        const selectedStore = res.data.data
        console.log(selectedStore)
        console.log(res);

        dispatch({
            type: "GET_STORE",
            payload: selectedStore
        })
    }

    const createStore = async (form) => {
        const res = await axiosClient.post("stores/create", form)
        console.log(res);
    }

    // 4. Retorno.
    return (
        // Se necesita un proovedor para que de el acceso a los componentes al estado inicial de guitarras.
        <StoreContext.Provider
            value={{
                stores: globalState.stores,
                hola: globalState.hola,
                singleStore: globalState.singleStore,
                changeText,
                getStores,
                getStore,
                createStore
            }}
        >
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreState