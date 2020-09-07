import React from 'react';
import { VictoryPie, VictorySharedEvents, VictoryBar, VictoryLabel, VictoryStack, VictoryTheme, VictoryGroup } from 'victory';
import moment from 'moment';
import * as firebase from "firebase";
import { ProgressBar, Container, Alert } from "react-bootstrap";

import ProgBar from './ProgressBar'


class GlobalVisualisation extends React.Component {

  state = {
    loading: true,
   }    
  // state = {
  //   loadig: true,
  //   barData : [
  //     {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
  //   ],
  //   pieData : [
  //     {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}
  //   ],
  //   labels: ["a", "b", "c", "d"]
  // }

  generateChartsDatas=(datas)=>{
    console.log('je suis dans la fonction');
    var sharedClassesNames = [];
    var commonSubfundNames = [];

    let barData = [];
    let pieData = [];

    for (let i=0; i<datas.length; i++) {
      console.log('yo')
      let sharedClassName = datas[i].share_class_name.replace('Class ','')
      console.log(sharedClassName.replace(' Class ',''));

      // Handle by className
      if(!sharedClassesNames.includes(sharedClassName)) {
        sharedClassesNames.push(sharedClassName)
        barData.push({
                    x: sharedClassName, 
                    y:  parseInt(datas[i].nb_alerts)
                  })
      } else {
        barData = barData.map(group => {
          if (group.x === sharedClassName) {
            return {
                    ...group, 
                    y: group.y + parseInt(datas[i].nb_alerts)
                  } 
          } else {
            return group;
          }
        })
      }

      // Handle By subFund Name

      let subfundName = datas[i].subfund_name

      if(!commonSubfundNames.includes(subfundName)) {
        commonSubfundNames.push(subfundName);
        pieData.push({
          x: subfundName, 
          y:  parseInt(datas[i].nb_alerts)
        })
      } else {
        pieData = pieData.map(subFund => {
          if (subFund.x === subfundName) {
            return {
              ...subFund, 
              y: subFund.y + parseInt(datas[i].nb_alerts)
            } 
          } else {
            return subFund;
          }
        })
      }
      
      
    }
    
    // console.log(sharedClassesNames);
    // console.log(barData);
    console.log(pieData);

    this.setState({
      pieData: pieData,
      barData: barData,
      labels: sharedClassesNames,
      loading: false
    })
    
  
  }
  

  componentWillMount() { 
    const ref = firebase.database().ref('asset_data')
    var startDate = moment('20200504');
    var endDate = moment('20200504');
    console.log(ref);
      ref.orderByChild("date").startAt(startDate.unix()).endAt(endDate.unix())
      .on("value", snapshot => {
        console.log("got the data!", snapshot.val());
        this.generateChartsDatas(snapshot.val());
        // this.setState({
        //   asset_data: snapshot.val(),
        //   loading: false
        // })
      });
      /*ref.on('value', snapshot => {
      console.log('salut data');
      console.log(snapshot.val())
      this.setState({
        asset_data: snapshot.val(),
        loading: false
      })
    })*/
  }

  
  // componentDidUpdate() {
  //   this.generateChartsDatas(this.props.datas || []); 

  // }

  render(){   
   // if(this.props.datas) {
  //  }
  return(
    <div>

         {!this.state.loading && (  
           <>
            <div style={{position: "fixed", top: "40px", left: "80%", "height": "200px"}} >
              <ProgBar />
            </div>
            <h4>⚠️ VOLUM BY SUBFUND</h4>

             <VictoryGroup
                  theme={VictoryTheme.material}
                  height={200}
                >
                
                <VictoryPie name="pie"
                    style={{ labels: {fontSize: 3, padding: 7}}}
                    data={this.state.pieData}
                  />

            </VictoryGroup>

            <h4>⚠️ NUMBERS BY SHARED CLASSES </h4>
            <VictoryGroup
                  theme={VictoryTheme.material}
                  height={300}
                  width={700}
                >
                <VictoryBar
                    style={{
                      data: {
                        fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31",
                        stroke: ({ index }) => +index % 2 === 0  ? "#000000" : "#c43a31",
                        fillOpacity: 0.7,
                        strokeWidth: 0.5
                      },
                      labels: {
                        fontSize: 6,
                        fill: ({ datum }) => datum.x === 3 ? "#000000" : "#000000"
                      }
                    }}
                    alignment="start"
                    data={this.state.barData}
                    labels={({ datum }) => [datum.y,'⚠️⚠️', ' ', datum.x ]}
                    labelComponent={<VictoryLabel  fontSize={6} angle={30} y={50}/>}
                  />
              </VictoryGroup>
          </>
       )}
  
      </div>
    );
  }
}
  
export default GlobalVisualisation;