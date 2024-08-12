import fotodani from './assets/foto.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Nav, Image } from 'react-bootstrap';

/* function App() {

  return (
    <>
      <Card className='foto-card'>
        <Card.Img variant="top" src={fotodani} style={{ width: '200px', height: '200px' }} />
        <Card.Body>
          <Card.Title>Dani Genovese</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

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
} */

const App = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-light">
          <Card className="text-center p-3">
            <Image src={fotodani} roundedCircle className="mb-3" />
            <h3>Dani Genovese</h3>
            <h5>Software Engineer</h5>
            <hr />
            <div className="text-left">
              <p><strong>Name:</strong> Johnson</p>
              <p><strong>Birthday:</strong> 08 Novemver 1998</p>
              <p><strong>Job:</strong> Software Engineer</p>
              <p><strong>Email:</strong> danir1512@gmail.com</p>
              <p><strong>Skype:</strong> test@gmail.com</p>
            </div>
            <Button variant="primary" className="mt-3">Download CV</Button>
          </Card>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <Nav className="justify-content-center mt-3">
            <Nav.Item>
              <Nav.Link href="#resume">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="primary" className="ml-3">Hire Me</Button>
            </Nav.Item>
          </Nav>

          <Card className="mt-3 p-4">
            <h2>Resume</h2>
            <Row>
              <Col md={6}>
                <h4>Working History</h4>
                <ul>
                  <li>
                    <strong>Software Engineer - Bosch SA (2022 - Present)</strong>
                    <ul>
                      <li>Working on Bosch autonomous driving solutions, having experience in lane and object detection and motion estimation.</li>
                      <li>Develop C++ for embedded software that runs on the vehicle, following the AUTOSAR and automotive standards.</li>
                      <li>Extend KPI tools functionality in Python to better evaluate our current solution.</li>
                      <li>Profile and optimize C++ to improve product performance.</li>
                    </ul>
                  </li>
                </ul>
              </Col>
            </Row>
          </Card>

          <Card className="mt-3 p-4">
              <Col md={6}>
                <h4>Education History</h4>
                <ul>
                  <li>
                    <strong>NOVA School of Science and Tecnology (2022 - 2009)</strong>
                    <p>Expenses as material breeding insisted building to in...</p>
                  </li>
                  <li>
                    <strong>Drawing Course (2003 - 2004)</strong>
                    <p>So insisted received is occasion advanced honoured...</p>
                  </li>
                  <li>
                    <strong>Abc High School (2000 - 2003)</strong>
                    <p>Excited him now natural saw passage offices you minuter...</p>
                  </li>
                </ul>
              </Col>
          </Card>


        </Col>
      </Row>
    </Container>
  );
}
  
export default App
