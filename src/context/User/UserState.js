import { useReducer } from 'react'

import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axiosClient from './../../config/axios'


const UserState = (props) => {

	// 1. INITIAL STATE
	const initialState = {
		currentUser: {
			nombre: "",
			apellido: "",
			pais: "",
			direccion: "",
			email: "",
			password: ""
		},
		authStatus: false
	}

	// 2. CONFIGURACIÓN DEL REDUCER
	const [globalState, dispatch] = useReducer(UserReducer, initialState)


	// 3. FUNCIONES
	const registerUser = async (form) => {

		const res = await axiosClient.post("users/create", form)
		
		console.log(res)

		const token = res.data.data

		dispatch({
			type: "REGISTRO_EXITOSO",
			payload: token
		})
	}

	const loginUser = async (form) => {

		const res = await axiosClient.post("users/login", form)

		console.log(res)

		const token = res.data.data

		dispatch({
			type: "LOGIN_EXITOSO",
			payload: token
		})

	}

	// 4. RETORNO
	return (
		<UserContext.Provider
			value={{
				currentUser: globalState.currentUser,
				authStatus: globalState.authStatus,
				registerUser,
				loginUser
			}}
		>

			{props.children}

		</UserContext.Provider>

	)

}




export default UserState