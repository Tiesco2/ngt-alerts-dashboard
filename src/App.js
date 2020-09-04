import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import NGTHome from './Components/NGTHome';
import Datas from './Components/Datas';
import FluctuationRepStaDate from './Components/FluctuationRepStaDate';
import FluctuationNbAlertsDate from './Components/FluctuationNbAlertsDate';
import Style from './Style.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={NGTHome} />
          <Route exact path="/datas" component={Datas} />
          <Route path="/FluctuationRepStaDate" component={FluctuationRepStaDate} />
          <Route path="/FluctuationNbAlertsDate" component={FluctuationNbAlertsDate} />
        </Switch>
        <style />
        <Header />
      </header>
    </div>
  );
}

export default App;
