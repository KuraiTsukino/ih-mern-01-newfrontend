// Gestión de URL del cliente.

// 1. Importaciones
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Guitars from "./components/Guitars";
import Single from "./components/Guitars/Single";
import Stores from "./components/Stores";
import SingleStore from "./components/Stores/Single";

import GuitarState from "./context/Guitar/GuitarState";
import StoreState from "./context/Store/StoreState";

// 2. Función
const Router = () => {
  return (
    <>
      <GuitarState>
        <StoreState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* localhost:3000/ */}
                <Route index element={<Home />} />
                {/* localhost:3000/registro */}
                <Route path="registro" element={<Register />} />
                {/* localhost:3000/iniciar-sesion */}
                <Route path="iniciar-sesion" element={<Login />} />
                <Route path="guitarras" element={<Guitars />} />
                <Route path="guitarras/:id" element={<Single />} />
                <Route path="stores" element={<Stores />} />
                <Route path="stores/:id" element={<SingleStore />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </StoreState>
      </GuitarState>
    </>
  );
};

// 3. Exportación
export default Router;
