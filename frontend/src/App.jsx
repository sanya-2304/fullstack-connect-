import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [deets, setDeets]=useState([])
  useEffect(()=>{
    axios.get('/api/deets').then((response)=>{setDeets(response.data)}).catch((err)=>{
      console.log(err)
    }
  )
  })
  return (
    <>
      <h1>FULLSTACK CONNECT</h1>
      <p>Deets: {deets.length}</p>
      {
        deets.map((deet, i)=>(
          <div key={deet.age}>
            <h3>{deet.name}</h3>
            <p>{deet.age}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
