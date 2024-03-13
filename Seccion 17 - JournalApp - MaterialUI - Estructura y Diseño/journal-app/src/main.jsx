import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'

import './styles.css'
import { BrowserRouter } from 'react-router-dom'

// se configura con BrowserRouter para utilizar el react-router-dom en lo mas alto de la app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </React.StrictMode>,
)
