import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

// el AppRouter es el componente principal de las rutas
export const AppRouter = () => {
  return (
    <>
      {/* definimos y importamos Routes para las rutas */}
      <Routes>
          {/* definimos y importamos Route para cada una de los componentes */}
          <Route path="login" element={<LoginPage/>}/>

          <Route path="/*" element={<HeroesRoutes/>}/>
          {/* registrar, olvido contraseña, etc... */}
      </Routes>
    </>
  )
}
