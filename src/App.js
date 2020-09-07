import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import GlobalVisualisation from "./Components/GlobalVisualisation";
import * as firebase from "firebase";
import config from "./config";
firebase.initializeApp(config);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      asset_data: [],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            alt=""
            src="https://nextgatetech.com/assets/img/brand/white-color.png"
            id="navbar-logo"
            style={{ height: "90px" }}
          ></img>
          <h2>Global Alerts at 04/05/20</h2>

          <Switch>
            <Route path="/" render={(props) => <GlobalVisualisation />} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
