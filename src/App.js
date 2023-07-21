import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardView from './Components/CardView';
import ViewJobs from './Components/ViewJobs';
function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <ViewJobs />
      </div>
    </div>
  );
}

export default App;