import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import ReportStatusVisibility from './Components/ReportStatusVisibility';
import NbAlertVisibility from './Components/NbAlertVisibility';
import GlobalVisualisation from './Components/GlobalVisualisation';
import Dashboard from './Components/Dashboard';
import Style from './Style.css'
import moment from 'moment';
import * as firebase from "firebase";
import config from "./config";
firebase.initializeApp(config) 


class App extends React.Component {
  constructor(props){
    super(props);      
    
   this.state = {
     loading: true,
     asset_data: []
    }       
  }
  // componentWillMount() { 
  //   const ref = firebase.database().ref('asset_data')
  //   var startDate = moment('20200501');
  //   var endDate = moment('20200504');
  //   console.log(ref);
  //     ref.orderByChild("date").startAt(startDate.unix()).endAt(endDate.unix())
  //     .on("value", snapshot => {
  //       console.log("got the data!", snapshot.val());
  //       this.setState({
  //         asset_data: snapshot.val(),
  //         loading: false
  //       })
  //     });
  //     /*ref.on('value', snapshot => {
  //     console.log('salut data');
  //     console.log(snapshot.val())
  //     this.setState({
  //       asset_data: snapshot.val(),
  //       loading: false
  //     })
  //   })*/
  // }
  render(){
  return (
    <div className="App">
      <header>
        <Switch>

          <Route
            path='/'
            render={(props) => (
              <GlobalVisualisation/>
            )}
          />
        </Switch>
        <style />
        <Header />
      </header>
    </div>
  );
}
}

export default App;
