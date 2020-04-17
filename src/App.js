import React from 'react';
import './App.css';
import Timer from './component/timer'

function App() {
  return (
    <div className="App">
      <Timer time='15' autoStart={false} step={1000}/>
      <Timer time='30' autoStart={true} step={2000}/>
    </div>
  );
}

export default App;
