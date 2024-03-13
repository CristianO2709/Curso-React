import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

//el AuthRoutes es el componente para las rutas secundarias
export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* esta ruta se agg cuando el usuario navegue a una ruta que no exista */}
        <Route path='/*' element={ <Navigate to="/auth/login" />}/>
    </Routes>
  )
}
