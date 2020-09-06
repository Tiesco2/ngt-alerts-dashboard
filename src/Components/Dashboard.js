import React from 'react';
import { VictoryPie } from 'victory';

class Dashboard extends React.Component {


  render(){
    return(
        <div>
            <h1 className="data">Dashboard</h1>
            <VictoryPie
                    data={[
                        
                        { x: "fund_name", y: 35 },
                        { x: "fund_id", y: 40 },
                        { x: "subfund_name", y: 5 },
                        { x: "subfund_id", y: 30 },
                        { x: "share_class_name", y: 50 },
                        { x: "share_class_id", y: 50 },
                        { x: "date", y: 35 },
                        { x: "report_status", y: 20 },
                        { x: "nb_allert", y: 25 }
                       
                    ]}
            />
            </div>
        );
    }
}
  
export default Dashboard;