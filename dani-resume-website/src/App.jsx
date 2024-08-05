import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1> About myself: </h1>
          <p> 
            Hi, I am Dani Genovese, a Software Engineer currently working from Lisbon. I am now working for Bosch on the development of software 
            for autonomous vehicles. I am amovitved person that is always looking for the next challenge bla bla bla...
          </p>
      </div>
      <div>
        <h1> Experience: </h1>
        <p> </p>
      </div>
      <div>
        <h1> Education: </h1>
        <p> Bla bla bla</p>
      </div>
      <div>
        <h1> Projects: </h1>
        <p> Bla bla bla</p>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Shit</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
