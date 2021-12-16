import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GuitarContext from '../../../context/Guitar/GuitarContext'

export default function Edit() {

	// 1. ESTADO GLOBAL
	const params = useParams()
	const idGuitar = params.id

	const ctx = useContext(GuitarContext)

	const {
		singleGuitar,
		getGuitar,
		updateGuitar
	} = ctx

	

	// 2. ESTADO LOCAL
	const [guitarData, setGuitarData] = useState({
		nombre: "",
		precio: "",
		color: "",
		imagen: "",
		descripcion: ""
	})

	// 3. FUNCIONES

	// USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
	useEffect(() => {

			getGuitar(idGuitar)

	}, [])

	// USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
	useEffect(() => {

		const {
			nombre,
			precio,
			color,
			imagen,
			descripcion
		} = ctx.singleGuitar

		setGuitarData({
			nombre: nombre,
			precio: precio,
			color: color,
			imagen: imagen,
			descripcion: descripcion
		})
	}, [singleGuitar])

	const handleChange = (e) => {
		e.preventDefault()

		setGuitarData({
			...guitarData,
			[e.target.name]: e.target.value
		})

	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		updateGuitar(guitarData, idGuitar)

	}

	return (
		<>
			<form onSubmit={ (event) => { handleSubmit(event) } }>
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 class="text-lg leading-6 font-medium text-gray-900">Editar guitarra</h3>
							<p class="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
						</div>

						<div class="grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium text-gray-700">Nombre</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="nombre"  
									value={guitarData.nombre}
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="last-name" class="block text-sm font-medium text-gray-700">Precio (MXN)</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="number" 
									name="precio" 
									value={guitarData.precio}
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-4">
								<label for="email-address" class="block text-sm font-medium text-gray-700">Imagen</label>
								<input 
									type="text" 
									name="imagen" 
									onChange={ (event) => { handleChange(event) } } 
									value={guitarData.imagen}
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-4">
								<label for="country" class="block text-sm font-medium text-gray-700">Color</label>
								<select 
									onChange={ (event) => { handleChange(event) } } 
									name="color"
									class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
									<option value={""}>
										---
									</option>
									<option value={"Blanco con negro"}>
										Blanco con Negro
									</option>
									<option value={"Rojo con blanco"}>Rojo con Blanco</option>
								</select>
							</div>

							<div class="col-span-6 sm:col-span-6 lg:col-span-4">
								<label for="city" class="block text-sm font-medium text-gray-700">Descripción</label>
								<textarea 
									onChange={ (event) => { handleChange(event) } } 
									type="text"
									value={guitarData.descripcion} 
									name="descripcion" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

						</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Guardar guitarra
						</button>
					</div>
				</div>
			</form>
		</>
	)
}