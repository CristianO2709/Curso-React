import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

// el AppRouter es el componente principal de las rutas
export const AppRouter = () => {
  return (
    <>
      {/* definimos y importamos Routes para las rutas */}
      <Routes>
          {/* definimos y importamos Route para cada una de los componentes */}
          {/* 1ro <Route path="login" element={<LoginPage />}/> */}
          {/* 2do <Route path="login/*" element={
            <PublicRouter>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRouter>
          }/> */}
          {/* 3ro */}
          <Route path="login" element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }/>

          <Route path="/*" element={
            <PrivateRouter>
              {/* ruta privada */}
              <HeroesRoutes />
            </PrivateRouter>
          } />

          {/* <Route path="/*" element={<HeroesRoutes/>}/> */}
          {/* registrar, olvido contraseña, etc... */}
      </Routes>
    </>
  )
}
