import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge, ListGroup } from 'react-bootstrap';
import fotodani from './assets/foto.png'

const CvTemplate = () => {
  return (
    <Container className="w3-light-grey">
      {/* Main Container */}
      <Container className="w3-content" >
        {/* Grid */}
        <Row className="w3-row-padding">
          {/* Left Column */}
          <Col className="w3-third">
            <Card className="w3-white w3-text-grey w3-card-4">
              <Card.Img variant="top" src={fotodani} alt="Avatar" style={{ width: '100%' }} className="w3-display-container"/>
              <Card.Body className="w3-container">
                <Card.Title as="h2" className="w3-container w3-text-black">Dani Genovese</Card.Title>
                <Card.Text className="w3-container">
                  <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Software Engineer</p>
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Lisbon, Portugal</p>
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>danir1512@gmail.com</p>
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+352 932282268</p>
                </Card.Text>
                <hr/>
                <Container>
                  <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                  <p>Adobe Photoshop</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '90%' }}>90%</div>
                  </div>
                  <p>Photography</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '80%' }}>80%</div>
                  </div>
                  <p>Illustrator</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '75%' }}>75%</div>
                  </div>
                  <p>Media</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '50%' }}>50%</div>
                  </div>
                 
                </Container>
                <hr/>
                <Container>
                  <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                  <p>English</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-teal" style={{ height: '24px', width: '100%' }}></div>
                  </div>
                  <p>Spanish</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-teal" style={{ height: '24px', width: '55%' }}></div>
                  </div>
                  <p>German</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-teal" style={{ height: '24px', width: '25%' }}></div>
                  </div>
                  <br />
                </Container>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column */}
          <Container className="w3-twothird">

            {/* About Myself Card */}
            <Card className="w3-container w3-card-2 w3-white w3-margin-bottom">
              <Card.Title as="h1" className="w3-text-grey w3-padding-16 ">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> About Myself
              </Card.Title>

              <Card.Body className="w3-container">
                <Card.Text>
                  Autonomous Driving Software Engineer at Bosch with a Master's degree in Computer Science and Electrical Engineering from FCT-NOVA. 
                  I am a hardworking and motivated software engineer offering strong foundations in software related topics, always looking for new 
                  challenges and opportunities to create something meaningful and add real value the business.
                </Card.Text>
              </Card.Body>
              <hr />
              
            </Card>

            {/* Education */}
            <Card className="w3-container w3-card-2 w3-white w3-margin-bottom">
              <Card.Title as="h1" className="w3-text-grey w3-padding-16 ">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> Education
              </Card.Title>

              <Card.Body className="w3-container">
                <Card.Title as="h5" className="w3-opacity">
                  <b>NOVA - Nova School of Science and Technology </b>
                </Card.Title>
                <Card.Subtitle as="h6" className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>2017 - 2023
                </Card.Subtitle>

                <Card.Text>
                  <ul>
                    <li>Master's degree in Computer Science and Electrical Engineering</li>
                    <li>Thesis: "Deep Learning for Autonomous Driving"</li>
                    <li>Thesis Grade: 19/20</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <hr />
        
            </Card>

            {/* Work Experience */}
            <Card className="w3-container w3-card-2 w3-white w3-margin-bottom">
              <Card.Title as="h1" className="w3-text-grey w3-padding-16 ">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> Work Experience
              </Card.Title>

              <Card.Body className="w3-container">
                <Card.Title as="h5" className="w3-opacity">
                  <b>Software Engineer I - Bosch </b>
                </Card.Title>
                <Card.Subtitle as="h6" className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2022 - <span className="w3-tag w3-teal w3-round">Current</span>
                </Card.Subtitle>

                <Card.Text>
                  <ul>
                    <li>Working on Bosch autonomous driving solutions, having experience in lane and object detection and motion estimation.</li>
                    <li>Develop C++ for embedded software that runs on the vehicle, following the AUTOSAR and automotive standards.</li>
                    <li>Extend KPI tools functionality in Python to better evaluate our current solution.</li>
                    <li>Profile and optimize C++ to improve product performance.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <hr />

              <Card.Body className="w3-container">
                <Card.Title as="h5" className="w3-opacity">
                  <b>Software Developer Intern - Altice </b>
                </Card.Title>
                <Card.Subtitle as="h6" className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>Jul 2020 - Aug 2020 <i/>
                </Card.Subtitle>

                <Card.Text>
                  <ul>
                    <li>Working on Bosch autonomous driving solutions, having experience in lane and object detection and motion estimation.</li>
                    <li>Develop C++ for embedded software that runs on the vehicle, following the AUTOSAR and automotive standards.</li>
                    <li>Extend KPI tools functionality in Python to better evaluate our current solution.</li>
                    <li>Profile and optimize C++ to improve product performance.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <hr />
              
            </Card>

            {/* Personal Projects */}
            <Card className="w3-container w3-card-2 w3-white w3-margin-bottom">
              <Card.Title as="h1" className="w3-text-grey w3-padding-16 ">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> Personal Projects
              </Card.Title>

              <Card.Body className="w3-container">
                <Card.Title as="h5" className="w3-opacity">
                  <b>Small web application using React</b>
                </Card.Title>
                <Card.Link as="a" href="https://www.example.com" className="w3-text-teal">
                  <h5>https://github.com/danir1512</h5>
                </Card.Link>
                <Card.Text>
                  <ul>
                    <li>I set a goal of creating a small multi-page we application 
                      that stored and display information for a certain game.</li>
                    <li>This involved creating a backend and frontend for the app to 
                      display and retrieve the information from a SQL database.</li>
                  </ul>
                </Card.Text>

                {/* <Card.Img src={fotodani} alt="Avatar" style={{ width: '50%' }} className="w3-display-container">

                </Card.Img> */}
              </Card.Body>
              <hr />

              <Card.Body className="w3-container">
                <Card.Title as="h5" className="w3-opacity">
                  <b>Jewels Game</b>
                </Card.Title>
                <Card.Link as="a" href="https://www.example.com" className="w3-text-teal">
                  <h5>https://github.com/danir1512</h5>
                </Card.Link>

                <Card.Text>
                  <ul>
                    <li>Small game that I develop using C++ and the SDL library.</li>
                  </ul>
                </Card.Text>

                {/* <Card.Img src={fotodani} alt="Avatar" style={{ width: '50%' }} className="w3-display-container">

                </Card.Img> */}
              </Card.Body>
              <hr />
        
            </Card>
          </Container>
        </Row>
      </Container>
    </Container>
    
  );
};

export default CvTemplate;


  
// export default App
