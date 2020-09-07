import React from 'react';
import { VictoryPie } from 'victory';
import axios from "axios";

class Dashboard extends React.Component {
          state = {
            filter: ''
        }
        
       
        getCards = () => {
            axios
              .get("https://next-gate-t-new-bdd.firebaseio.com/")
              .then(res => res.data)
              .then(data => {
                this.setState({ false: data.false });
              });
        };
          
    createChartData = () => {
        console.log(this.props.datas, 'données');
        return(
            
            [                  
                { x: "fund_name", y: 15 },
                { x: "subfund_name", y: 15 },
                { x: "share_name", y: 15 },            
                { x: "nb_alert", y: 35 },
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
                    parent: { border: "1px solid #ccc", width: '500px'
                }
                }}
                data={this.createChartData()}
            />
            
            </div>
        );
    }
}
  
export default Dashboard;