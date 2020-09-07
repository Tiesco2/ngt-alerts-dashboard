import React from 'react';
import { VictoryPie, VictorySharedEvents, VictoryBar, VictoryLabel } from 'victory';


class GlobalVisualisation extends React.Component {

  state = {
    barData : [
      {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
    ],
    pieData : [
      {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}
    ],
    labels: ["a", "b", "c", "d"]
  }

  getGroupNames=(datas)=>{
    console.log('je suis dans la fonction');
    var groupName = [];
    let final = [];
    for (let i=0; i<datas.length; i++) {
      console.log('yo')
      let classFund = datas[i].share_class_name
      console.log(classFund);
      if(!groupName.includes(classFund)) {
        groupName.push(classFund)
        final.push({
                    x: classFund, 
                    y:  parseInt(datas[i].nb_alerts)
                  })
      } else {
        final = final.map(group => {
          if (group.x === classFund) {
            return {
                    ...group, 
                    y: group.y + parseInt(datas[i].nb_alerts)
                  } 
          } else {
            return group;
          }
        })
      }
    }
    
    console.log(groupName);
    console.log(final);
    this.setState({
        pieData: final,
        barData: final,
        labels: groupName

    })

  }
  componentDidMount() {
    
    
           
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

  render(){   
   // if(this.props.datas) {
      this.getGroupNames(this.props.datas || []); 
  //  }
  return(
    <div>
        <h1 className="data">Dashboard</h1>
        <svg viewBox="0 0 450 350">
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
        width={300}
        standalone={false}
        style={{
          data: { width: 20 },
          labels: {fontSize: 25}
        }}
        data={this.state.barData}
        labels={this.state.labels}
        labelComponent={<VictoryLabel y={290}/>}
      />
    </g>
    <g transform={"translate(0, -75)"}>
      <VictoryPie name="pie"
        width={250}
        standalone={false}
        style={{ labels: {fontSize: 25, padding: 10}}}
        data={this.state.pieData}
      />
    </g>
  </VictorySharedEvents>
</svg>      
      </div>
    );
  }
}
  
export default GlobalVisualisation;