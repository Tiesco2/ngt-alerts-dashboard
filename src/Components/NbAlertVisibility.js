import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

const NbAlertVisibility = () =>{
    return(
        <div>
            <h1 className="data">Alert Number</h1>  
            <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={20}
            >
            <VictoryAxis
                tickValues={[1, 2, 3, 4]}
                tickFormat={["ThreeSigma", "HighVolatility", "ReportStatus", "NbAlert"]}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryBar
                data={data}
                x="quarter"
                y="earnings"
            />
           </VictoryChart>
        </div>
    )   
}


export default NbAlertVisibility;