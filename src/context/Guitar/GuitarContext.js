// Establecer un contexto
// Inicialización del Context, empieza con un valor inicial de null, pero conforme vayamos agregando nuevos valores, ese null va a cambiar a un objeto.

import { createContext } from "react";

const GuitarContext = createContext(null)

export default GuitarContext