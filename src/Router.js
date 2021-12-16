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
import CreateGuitar from "./components/Guitars/Create";
import EditGuitar from "./components/Guitars/Single/Edit";

import Stores from "./components/Stores";
import SingleStore from "./components/Stores/Single";
import CreateStore from "./components/Stores/Create";
import EditStore from "./components/Stores/Single/Edit";

import GuitarState from "./context/Guitar/GuitarState";
import StoreState from "./context/Store/StoreState";
import UserState from "./context/User/UserState";

import Auth from "./routes/Auth"
import Private from "./routes/Private"
import Profile from "./components/User/Profile";

// 2. Función
const Router = () => {
  return (
    <>
      <UserState>
        <GuitarState>
          <StoreState>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  {/* localhost:3000/ */}
                  <Route index element={<Home />} />

                  {/* Rutas de autenticación. Evitan que un usuario loggeado pueda entrar a Register y a Login*/}
                  {/* localhost:3000/registro */}
                  <Route path="registro" element={<Auth component={Register} />} />
                  {/* localhost:3000/iniciar-sesion */}
                  <Route path="iniciar-sesion" element={<Auth component={Login} />} />
                  <Route path="guitarras" element={<Guitars />} />
                  <Route path="guitarras/crear" element={<CreateGuitar />} />
                  <Route path="guitarras/:id" element={<Single />} />
                  <Route path="guitarras/:id/editar" element={<EditGuitar />} />
                  <Route path="stores" element={<Stores />} />
                  <Route path="stores/crear" element={<CreateStore />} />
                  <Route path="stores/:id" element={<SingleStore />} />
                  <Route path="stores/:id/editar" element={<EditStore />} />
                  <Route path="profile" element={<Private component={Profile} />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </StoreState>
        </GuitarState>
      </UserState>
    </>
  );
};

// 3. Exportación
export default Router;
