import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory';

class ReportStatusVisibility extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (
            <div>
                <h1 className="data">Report Status </h1>
                <VictoryChart
                    theme={VictoryTheme.material}
                    >
                    <VictoryLine
                        style={{
                            data: { stroke: "#ea80fc " },
                            parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                        ]}
                    />
                </VictoryChart>
            </div>
       );
    }
}
 
export default ReportStatusVisibility;