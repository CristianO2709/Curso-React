/* eslint-disable react/prop-types */
import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: "John Doe",
//     email: "alvadev@mail.com"
// }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
        {
            //para renderizar
            children
        }
    </UserContext.Provider>
  )
}
