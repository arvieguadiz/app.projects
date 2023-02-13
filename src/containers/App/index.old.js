import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeSelectApp } from './selectors';
import { appReducer } from './reducer';

import { Counter } from '../../features/counter/Counter';
import logo from '../../images/logo.svg';
import './index.css';

function App() {
  const dispatch = useDispatch();
  const appState = useSelector(makeSelectApp);
  const { changeName } = appReducer.actions;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload. {JSON.stringify(appState.name)}
        </p>
        <span>
          <span onClick={() => dispatch(changeName('benito'))}>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
