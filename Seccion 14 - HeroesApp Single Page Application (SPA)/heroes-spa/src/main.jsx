import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { HeroesApp } from './HeroesApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* se instala react-router-dom y se importa el BrowserRouter */}
    <BrowserRouter>
      <HeroesApp/>
    </BrowserRouter>
  </React.StrictMode>
)
