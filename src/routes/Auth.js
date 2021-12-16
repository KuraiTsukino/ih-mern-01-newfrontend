import React, {useContext, useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../context/User/UserContext'

// Desestructuración de parámetros. Los props son los valores enfrente de component del Router. El component es de donde voy a sacar los props, tiene que ir en ese formato "component: Component" esto es la representación de Register en el Router.
export default function PublicRoute({ component: Component, ...props }) { 


    const userCtx = useContext(UserContext)
    // Contexto de usuario, antes de entrar a registro se ejecuta el Auth, este archivo
    const { authStatus, verifyingToken } = userCtx
    // loading es un spinner para cuando se va descargando la página
    const [loading, setLoading] = useState(true)

    useEffect( async () => {
        await verifyingToken()
        setLoading(false)

    }, [authStatus])

    return (// Compara authStatus, para ver si esta loggeado o no y devuelve a Home y si no esta loggeado se abre register.-- El component es la representación del componente, el 2o Component de la línea 6 de este archivo.
		<>
			{
				authStatus ?
				(<Navigate replace to="/" />)
				:
				(<Component/>)
			}
		</>
    )
    
}