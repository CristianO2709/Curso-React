import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

// el HeroesRoutes es componente principal para las rutas de los componentes de los Heroes
export const HeroesRoutes = () => {
  return (
    <>
        {/* se inicializa el componente Navbar para vizualizarlo */}
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DcPage/>}/>

                <Route path="search" element={<SearchPage/>}/>
                <Route path="hero/:id" element={<HeroPage/>}/>
                
                <Route path="/" element={<Navigate to="/marvel"/>}/>
            </Routes>
        </div>
    </>
  )
}
