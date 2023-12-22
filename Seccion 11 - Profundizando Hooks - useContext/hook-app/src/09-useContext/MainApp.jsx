import { Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserProvider";

import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    // se agg el UserProvider para que todo lo que esta adentro acceda a la informacion
    <UserProvider>
        <Navbar/>
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="about" element={ <AboutPage /> }/>
            <Route path="login" element={ <LoginPage /> }/>

            {/* cuando se escribe una ruta que no existe se redirije al componente */}
            {/* <Route path="/*" element={ <LoginPage /> }/> */}
            <Route path="/*" element={ <Navigate to="/about"/> }/>
        </Routes>
    </UserProvider>
  )
}
