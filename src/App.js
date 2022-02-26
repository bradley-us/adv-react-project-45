import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

function App(props) {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withServiceWorkerUpdater(App)