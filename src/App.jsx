import React from 'react'
import TattooArtistSite from './comp/Tatto.jsx' // adjust path if needed
import './App.css' // Ensure Tailwind CSS is imported

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <TattooArtistSite />
    </div>
  )
}
