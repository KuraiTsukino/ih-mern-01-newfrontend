import React, { useContext } from "react";
import StoreContext from "../../../context/Store/StoreContext";
import { useParams } from "react-router-dom";

export default function SingleStore() {

    const ctx = useContext(StoreContext)
    const { singleStore, getStore } = ctx

    const params = useParams()
    const id = params.id

    return (
        <div>
            Página individual de tienda

            <button onClick={() => { getStore(id) }}>
                Obtener tienda individual
            </button>

            <h1>{singleStore.domicilio}</h1>
            <p>{singleStore.telefono}</p>
        </div>
    )
}
