import React from 'react';
import { VictoryLabel, VictoryTheme, VictoryGroup, VictoryBar } from "victory";

class NumbersBySharedClasses extends React.Component {
    render(){
        return(
            <div>
                 <h4> NUMBERS BY SHARED CLASSES </h4>
            <VictoryGroup
              theme={VictoryTheme.material}
              height={300}
              width={700}
            >
              <VictoryBar
                style={{
                  data: {
                    fill: ({ datum }) =>
                      datum.x === 3 ? "#000000" : "#c43a31",
                    stroke: ({ index }) =>
                      +index % 2 === 0 ? "#000000" : "#c43a31",
                    fillOpacity: 0.7,
                    strokeWidth: 0.5,
                  },
                  labels: {
                    fontSize: 6,
                    fill: ({ datum }) =>
                      datum.x === 3 ? "#000000" : "#000000",
                  },
                }}
                alignment="start"
                data={this.props.barData}
                labels={({ datum }) => [datum.y, "⚠️⚠️", " ", datum.x]}
                labelComponent={<VictoryLabel fontSize={6} angle={30} y={50} />}
              />
            </VictoryGroup>
             
            </div>
        )
    }
}

export default NumbersBySharedClasses;