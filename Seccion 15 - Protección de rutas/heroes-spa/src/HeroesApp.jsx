import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

// el HeroesApp es el componente principal
export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
