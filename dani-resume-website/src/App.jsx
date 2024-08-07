import { useState } from 'react'
import reactLogo from './assets/react.svg'
import fotodani from './assets/foto.png'
import viteLogo from '/vite.svg'
import './App.css'
import Card from 'react-bootstrap/Card';

function App() {

  return (
    <>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={fotodani} style={{ width: '100px', height: '100px' }} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='section-card'>
        <Card.Body>
          <Card.Title>About myself:</Card.Title>
          <Card.Text>
            Autonomous Driving Software Engineer at Bosch with a Master's degree in Computer Science and Electrical Engineering from FCT-NOVA. 
            I am a hardworking and motivated software engineer offering strong foundations in software related topics, always looking for new 
            challenges and opportunities to create something meaningful and add real value the business.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card className='section-card'>
        <Card.Header>Work Experience:</Card.Header>
        <br/>
        <Card.Body>
          <Card className='subsection-card'>
            <Card.Header>Software Engineer I</Card.Header>
            <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Bosch Portugal -- 2022 - Present -- Lisbon, Portugal</Card.Subtitle>
              <ul>
                <li>Working on Bosch autonomous driving solutions, having experience in lane and object detection and motion estimation.</li>
                <li>Develop C++ for embedded software that runs on the vehicle, following the AUTOSAR and automotive standards.</li>
                <li>Extend KPI tools functionality in Python to better evaluate our current solution.</li>
                <li>Profile and optimize C++ to improve product performance.</li>
              </ul>
            </Card.Body>
          </Card>
          <br />

          <Card className='subsection-card'>
            <Card.Header>Software Developer Intern</Card.Header>
            <Card.Title></Card.Title>
            <Card.Body>
            <Card.Subtitle>
              Bosch Portugal <br/>
              2022 - Present <br/>
              Lisbon, Portugal</Card.Subtitle>
              <ul>
                <li>Develop web application for internal client in the company using Vanilla JavaScript, JQuery, PHP and CSS.</li>
                <li>Engage is meetings discussion with the customer to understand what features the app needed.</li>
                <li>By the end of my internship, I successfully delivered the application.</li>
              </ul>
            </Card.Body>
          </Card>
          <br />
        </Card.Body>
      </Card>
      <br />
      
      <Card className='section-card'>
        <Card.Body>
          <Card.Title>Education:</Card.Title>
          <Card.Text>
          <Card className='subsection-card'>
            <Card.Header>NOVA - Nova School of Science and Technology</Card.Header>
            <Card.Title></Card.Title>
            <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Bosch Portugal -- 2022 - Present -- Lisbon, Portugal</Card.Subtitle>
              <ul>
                <li>Specialization in Electronics and Robotics.</li>
              </ul>
            </Card.Body>
          </Card>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card className='section-card'>
        <Card.Body>
          <Card.Title>Projects:</Card.Title>
          <Card.Text>
            Bla bla bla
            <a href='https://github.com/danir1512'> 
          <p> Git hub page</p>
        </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

    </>
  )
}

export default App
