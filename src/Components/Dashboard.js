import React from 'react';
import { VictoryPie } from 'victory';

class Dashboard extends React.Component {
  
    createChartData = () => {
        console.log(this.props.datas, 'lhomme');
        return(
            [                  
                { x: "fund_name", y: 15 },
                { x: "subfund_name", y: 15 },
                { x: "share_name", y: 15 },            
                { x: "report_status", y: 35 },
                { x: "nb_false", y: 35 }, 
                { x: "nb_true", y: 35 }               
            ]
        )
    }

  render(){
      
    return(
        <div>
            <h1 className="data">Dashboard</h1>
            <VictoryPie
               style={{
                    data: { stroke: "#ffff00" },
                }}
                data={this.createChartData()}
            />
            </div>
        );
    }
}
  
export default Dashboard;