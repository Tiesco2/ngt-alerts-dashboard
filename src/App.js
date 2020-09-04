import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Html from './Components/Html';
import Css from './Components/Css';
import Js from './Components/Js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/html" component={Html} />
          <Route path="/css" component={Css} />
          <Route path="/js" component={Js} />

        </Switch>
        <style />
        <Header />
        
      </header>
    </div>
  );
}

export default App;
