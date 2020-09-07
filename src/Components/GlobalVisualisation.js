import React from "react";
import AlertsPieByName from './AlertsPieByName';
import NumbersBySharedClasses from './NumbersBySharedClasses';
import moment from "moment";
import * as firebase from "firebase";
import ProgBar from "./ProgressBar";

class GlobalVisualisation extends React.Component {
  state = {
    loading: true,
  };

  generateChartsDatas = (datas) => {
    console.log("je suis dans la fonction");
    var sharedClassesNames = [];
    var commonSubfundNames = [];

    let barData = [];
    let pieData = [];
    let notReadyReports = 0;

    for (let i = 0; i < datas.length; i++) {
      let sharedClassName = datas[i].share_class_name.replace("Class ", "");
      if (datas[i].report_status === "False") {
        notReadyReports++;
      }
      if (!sharedClassesNames.includes(sharedClassName)) {
        sharedClassesNames.push(sharedClassName);
        barData.push({
          x: sharedClassName,
          y: parseInt(datas[i].nb_alerts),
        });
      } else {
        barData = barData.map((group) => {
          if (group.x === sharedClassName) {
            return {
              ...group,
              y: group.y + parseInt(datas[i].nb_alerts),
            };
          } else {
            return group;
          }
        });
      }

      let subfundName = datas[i].subfund_name;

      if (!commonSubfundNames.includes(subfundName)) {
        commonSubfundNames.push(subfundName);
        pieData.push({
          x: subfundName,
          y: parseInt(datas[i].nb_alerts),
        });
      } else {
        pieData = pieData.map((subFund) => {
          if (subFund.x === subfundName) {
            return {
              ...subFund,
              y: subFund.y + parseInt(datas[i].nb_alerts),
            };
          } else {
            return subFund;
          }
        });
      }
    }

    this.setState({
      pieData: pieData,
      barData: barData,
      labels: sharedClassesNames,
      percentLimit: Math.trunc((notReadyReports / datas.length) * 100),
      loading: false,
    });
  };

  componentWillMount() {
    const ref = firebase.database().ref("asset_data");
    var startDate = moment("20200504");
    var endDate = moment("20200504");
    console.log(ref);
    ref
      .orderByChild("date")
      .startAt(startDate.unix())
      .endAt(endDate.unix())
      .on("value", (snapshot) => {
        this.generateChartsDatas(snapshot.val());
      });
  }

  render() {
   
    return (
      <div>
        {!this.state.loading && (
          <>
            <div
              style={{
                position: "fixed",
                top: "40px",
                left: "80%",
                height: "200px",
              }}
            >
              <ProgBar percentLimit={this.state.percentLimit} />
            </div>
            <AlertsPieByName pieData={this.state.pieData} /> 
            <NumbersBySharedClasses barData={this.state.barData}/>
          </>
        )}
      </div>
    );
  }
}

export default GlobalVisualisation;
