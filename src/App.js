import './App.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class PillDispenseTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: 0,
      minute: 0,
      hasTaken: false
    }
  }
  render() {
    let status = 'Not Taken';
    if (this.state.hasTaken) {
      status = 'Taken';
    }
    return (
      <div className="container medContainer d-flex justify-content-between">
        <div className="medText">{this.state.hour}:{this.state.minute}</div>
        <div>{status}</div>
      </div>
    )
  }
}

class DispensePill extends React.Component {
  render() {
    return (
      <div className="alignDispensePill">
        <Button variant="success" size="lg">Dispense Pill</Button>
      </div>
    )
  }
}

// MedicationView manages displaying the correct things on the screen: either
// displaying the "Dispense Pill" component, or displaying the "Pill Dispense Time" components
class MedicationView extends React.Component {
  render() {
    return (
    <div>
      <h5 style={{textAlign: 'center'}}>Medication Schedule</h5>
      <PillDispenseTime />
      <PillDispenseTime />
    </div>
    );
  }
}

class PillDispenserDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        time: new Date(),
        WiFi: true,
        Battery: 100
      },
      body: null
    }
  }
  render() {
    let wifiPath = '/pill-dispenser/wifi-connected.png';
    if (! this.state.header.WiFi) {
      wifiPath = '/pill-dispenser/wifi-disconnected.png';
    }
    let batteryPath = '/pill-dispenser/battery-empty.png';
    if (this.state.header.Battery > (75+100)/2) {
      batteryPath = '/pill-dispenser/battery-100.png';
    } else if (this.state.header.Battery > (50 + 75) / 2) {
      batteryPath = '/pill-dispenser/battery-75.png';
    } else if (this.state.header.Battery > (25 + 50) / 2) {
      batteryPath = '/pill-dispenser/battery-50.png';
    } else if (this.state.header.Battery > (25) / 2) {
      batteryPath = '/pill-dispenser/battery-25.png';
    }
    let displayTime = String(this.state.header.time.getHours()) + ':' + String(this.state.header.time.getMinutes());
    return (
      <div className="h-100">
        <div className="d-flex justify-content-between" style={{height: '10%', backgroundColor: 'hsl(200, 100%, 50%)'}}>
          <div>
            <span className="p-1">{displayTime}</span>
          </div>
          <div>
            <img className="p-1" height='30px' width='30px' src={wifiPath} />
            <img className="p-1" height='30px' width='45px' src={batteryPath} />
          </div>
        </div>
        <div style={{height: '75%'}}>
          {this.state.body}
          <DispensePill />
        </div>
        <div style={{height: '15%'}}>
          <button className="btn btn-primary w-50">Back</button>
          <button className="btn btn-primary w-50">Next</button>
        </div>
      </div>
    );
  }
}

class PillDispenser extends React.Component {
  render() {
    return (
      <div className="outerCircle">
        <div className="innerCircle">
          <div className="LEDDisplay">
            <PillDispenserDisplay />
          </div>
        </div>
      </div>
    );
  }
}

class Hardware extends React.Component {
  render() {
    return (
      <div className="hardware mx-auto">
        <h1>Pill Dispenser</h1>
        <p>A simplified version of a pill dispenser made by <a href="https://www.dosehealth.com/">Dose Health LLC</a> which was created to learn React with a NodeJS backend.</p>
        <PillDispenser />
      </div>
    );
  }
}

class Controller extends React.Component {
  render() {
    return (
      <Form>
        <Form.Label>Time Travel</Form.Label>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Hour
            </Form.Label>
            <Form.Control className="mb-2" id="inlineFormInput" placeholder="Hour" />
          </Col>
          <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Minute
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id="inlineFormInputGroup" placeholder="Minute" />
          </InputGroup>
          </Col>
        </Form.Row>
        
        <Form.Label htmlFor="batteryLifeRemaining">Battery Life Remaining (percentage)</Form.Label>
        <Form.Control className="mb-2" id="batteryLifeRemaining" placeholder="100" />

        <Form.Label htmlFor="wifiStatus">WiFi Status</Form.Label>
        <Form.Control as="select">
          <option value="true">Connected</option>
          <option value="false">Disconnected</option>
        </Form.Control>
      </Form>
    )
  }
}

function App() {
  return (
    <div style={{backgroundColor: "whitesmoke"}}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Server Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Server Application</Nav.Link>
            <Nav.Link href="/dispenser/1">Pill Dispenser #1</Nav.Link>
            <Nav.Link href="/dispenser/2">Pill Dispenser #2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <Hardware />
      </div>
      <div className="container">
        <Controller />
      </div>
    </div>
  );
}

export default App;
