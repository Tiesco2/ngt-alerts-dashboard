import React from 'react';
import { VictoryPie, VictoryTheme, VictoryGroup } from "victory";

class AlertsPieByName extends React.Component {
    render(){
        return(
            <div>
             <h4> VOLUM BY SUBFUND</h4>
            <VictoryGroup theme={VictoryTheme.material} height={200}>
              <VictoryPie
                name="pie"
                style={{ labels: { fontSize: 3, padding: 7 } }}
                data={this.props.pieData}
              />
            </VictoryGroup>
            </div>
        )
    }
}

export default AlertsPieByName;