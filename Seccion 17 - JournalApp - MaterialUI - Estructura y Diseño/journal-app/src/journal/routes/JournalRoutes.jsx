import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

//el JournalRoutes es el componente para las rutas secundarias
export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<JournalPage />} />

        {/* esta ruta se agg cuando el usuario navegue a una ruta que no exista */}
        <Route path='/*' element={ <Navigate to="/" />}/>
    </Routes>
  )
}
