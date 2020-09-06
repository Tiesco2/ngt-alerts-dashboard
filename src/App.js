import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import ReportStatusVisibility from './Components/ReportStatusVisibility';
import NbAlertVisibility from './Components/NbAlertVisibility';
import GlobalVisualisation from './Components/GlobalVisualisation';
import Dashboard from './Components/Dashboard';
import Style from './Style.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={GlobalVisualisation} />
          <Route exact path="/NbAlertVisibility" component={NbAlertVisibility} />
          <Route exact path="/ReportStatusVisibility" component={ReportStatusVisibility} /> 
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
        <style />
        <Header />
      </header>
    </div>
  );
}

export default App;
