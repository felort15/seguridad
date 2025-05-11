import React from 'react'; 
import UseState from './UseState';
import ClassState from './ClassState';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <UseState className="UseState" /> 
      </div> 
      <div className="App">
        <ClassState className="ClassState" />
      </div>
    </div>
  );
}

export default App;
