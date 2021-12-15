import React, { useState, useContext} from "react";
import StoreContext from "../../context/Store/StoreContext";

export default function Create() {

    // 1. Estado global
    const ctx = useContext(StoreContext)
    const {
        createStore
    } = ctx

    console.log(createStore);

    // 2. Estado local.
    const [newStore, setNewStore] =useState({
        domicilio: "",
        telefono: ""
    })

    // 3. Funciones.
    const handleChange = (e) => {
        e.preventDefault()

        setNewStore({
            ...newStore,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit =(e) => {
        e.preventDefault()
        
        createStore(newStore)
    }

    return (
        <>
            <form onSubmit={ (event) => { handleSubmit(event) }}>
            <div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
							<p class="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
						</div>

						<div class="grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium text-gray-700">Domicilio</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="domicilio"  
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="last-name" class="block text-sm font-medium text-gray-700">Teléfono</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="telefono" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Guardar tienda
						</button>
					</div>
				</div>
            </form>
        </>
    )
}
