import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [rickmorty, setRickmorty] = useState([]);

  useEffect(()=>{
    const obtener = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');

        const datos = await response.json();

        setRickmorty(datos.results)
    }
    obtener();
  }, []);

  return (
    <>
    <div>
      <h1>Personajes de Rick and Morty </h1>
        
    </div>
    </>
  )
}

export default App
