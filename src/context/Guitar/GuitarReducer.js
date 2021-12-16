const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_GUITAR":
        case "UPDATE_GUITAR":
            return {
                ...globalState,
                singleGuitar: action.payload
            }
        
        case "GET_GUITARS":
            return {
                ...globalState,
                guitars: action.payload
            }

        case "CHANGE_TEXT":
            return {
                ...globalState, // Spread operator, rae las propiedades anteriores, trae todos los valores del estado global y luego te indico cuál es el que quiero reemplazar
                hola: action.payload
            }
        default:
            return globalState
    }
}

export default reducer