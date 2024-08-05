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
          Autonomous Driving Software Engineer at Bosch with a Master's degree in Computer Science and Electrical Engineering from FCT-NOVA. 
          I am a hardworking and motivated software engineer offering strong foundations in software related topics, always looking for new 
          challenges and opportunities to create something meaningful and add real value the business.
          </p>
      </div>
      <div>
        <h1> Work Experience: </h1>
        <h2> Software Engineer I </h2>
        <ul>
          <li> Bosch Portugal -- 2022 - Present -- Lisbon, Portugal </li>
          <li> Working on Bosch autonomous driving solutions, having experience in lane and object detection and motion estimation. </li>
          <li> Develop C++ for embedded software that runs on the vehicle, following the AUTOSAR and automotive standards. </li> 
          <li> Extend KPI tools functionality in Python to better evaluate our current solution. </li> 
          <li> Profile and optimize C++ to improve product performance. </li>
        </ul>      
      </div>
      <div>
        <h1> Education: </h1>
        <p> Bla bla bla</p>
      </div>
      <div>
        <h1> Projects: </h1>
        <p> Bla bla bla</p>
        <a href='https://github.com/danir1512'> 
          <p> Git hub page</p>
        </a>
      </div>
    </>
  )
}

export default App
