import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

//el AppRouter es el componente para las rutas principales
export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes/> }/>

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes/> }/>
    </Routes>
  )
}
