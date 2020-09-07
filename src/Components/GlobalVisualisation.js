import React from 'react';
import { VictoryPie, VictorySharedEvents, VictoryBar, VictoryLabel, VictoryStack } from 'victory';
import moment from 'moment';
import * as firebase from "firebase";

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
    
    console.log(sharedClassesNames);
    console.log(barData);
    this.setState({
        pieData: pieData,
        barData: barData,
        labels: sharedClassesNames,
        loading: false
    })
    
  
  }
  componentDidMount() {
    
    
           
  }

  componentWillMount() { 
    const ref = firebase.database().ref('asset_data')
    var startDate = moment('20200501');
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

  createChartData = () => {
      console.log(this.props.datas, 'données');
      
      return(          
      [  
                      
        
        { x: "fund_id", y: 35 }, 
        { x: "fund_name", y: 15 },
        { x: "nb_alert", y: 35 },   
        { x: "subfund_id", y: 15 }, 
        { x: "date", y: 25 },
        { x: "share_name_id", y: 15 }, 
        { x: "share_class_name", y: 25 },           
        { x: "report_status", y: 25 }, 
        { x: "subfund_name", y: 15 }    
      ]
    )
  }

  componentDidUpdate(prevState, prevProps) {
    
  }
  // componentDidUpdate() {
  //   this.generateChartsDatas(this.props.datas || []); 

  // }

  render(){   
   // if(this.props.datas) {
  //  }
  return(
    <div>
        <h1 className="data">Dashboard</h1>
         {!this.state.loading && (  <svg viewBox="0 0 450 350">
          <VictorySharedEvents
            events={[{
              childName: ["pie", "bar"],
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [{
                    childName: ["pie", "bar"],
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {fill: "tomato"})
                      };
                    }
                  }];
                },
                onMouseOut: () => {
                  return [{
                    childName: ["pie", "bar"],
                    mutation: () => {
                      return null;
                    }
                  }];
                }
              }
            }]}
          >
            <g transform={"translate(150, 50)"}>
              
              <VictoryBar name="bar"
                width={450}
                standalone={false}
                style={{
                  data: { width: 6 },
                  labels: {fontSize: 7}
                }}
                data={this.state.barData}
                labels={this.state.labels}
                labels={({ datum }) => datum.y+' '+ datum.x}
                labelComponent={<VictoryLabel angle={-90} y={270}/>}
              />
            </g>
            <g transform={"translate(0, -75)"}>
              <VictoryPie name="pie"
                width={240}
                labelComponent={<VictoryLabel angle={-40}/>}
                standalone={false}
                style={{ labels: {fontSize: 8, padding: 7}}}
                data={this.state.pieData}
              />
            </g>
          </VictorySharedEvents>
        </svg>)}
      
      </div>
    );
  }
}
  
export default GlobalVisualisation;