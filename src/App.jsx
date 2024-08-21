import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Restaurants } from './components/Restaurants'


function App() {

  return (
    <>
    <header>
      <Nav />
    </header>
    <main>
      <Restaurants/>
    </main>
    <footer>

    </footer>
    </>
  )
}
export default App
