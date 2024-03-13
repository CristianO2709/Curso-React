import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

//se asigna el AppRouter que es el componente para las rutas principales
export const JournalApp = () => {
  return (
    //se asigna el AppTheme que es el componente para el tema de color 
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
