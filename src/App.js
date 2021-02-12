import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class PillDispenserDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        time: '00:00',
        WiFi: 'Connected',
        Battery: 0.8,
        ShowHeader: false
      },
      
    }
  }
  render() {
    return (
      <div className="h-100">
        <div style={{height: '80%'}}>
          <p>this is some text on the inner display</p>
        </div>
        <div style={{height: '20%'}}>
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

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Pill Dispenser</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Server Application</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dispenser/1">Pill Dispenser #1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dispenser/2">Pill Dispenser #2</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Hardware />
      </div>
    </div>
  );
}

export default App;
