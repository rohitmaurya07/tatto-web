// main.jsx
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'          // Tailwind or global styles
import App from './App.jsx'   // Your main App component

// Get root element
const rootElement = document.getElementById('root')

// Create React root and render
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
