import React, { useEffect, useContext } from 'react'
import GuitarContext from './../../../context/Guitar/GuitarContext'

import {useParams} from 'react-router-dom'


export default function Single() {

	const ctx = useContext(GuitarContext)
	const { singleGuitar, getGuitar } = ctx

	const params = useParams()
	const id = params.id


	useEffect(() => {
		getGuitar(id)
	}, [])

	return (
		<div>
			Página individual de guitarra			

			<h1>{singleGuitar.nombre}</h1>
			<p>{singleGuitar.descripcion}</p>
			<p>{singleGuitar.precio}</p>

		</div>
	)
}