import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import Header from './Header.jsx'
import ThreadsList from './ThreadsList.jsx'
//import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ThreadsList />
  </StrictMode>,
)
