import React from "react";
import "c3/c3.css";
const c3 = require("c3");

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chart = null;
  }
  componentDidUpdate() {
    if (this.props.item.linkedToMap) {
      this.chart.load({
        columns: this.props.item.columns,
        type: "line",
      });
    }
  }
  componentDidMount() {
    this.chart = c3.generate({
      bindto: "#chart" + this.props.item.chartID,
      size: {
        height: 240,
      },
      padding: {
        right: 10,
      },
      data: {
        columns: this.props.item.columns,
        type: "line",
        x: "x-label",
        colors: this.props.item.colors,
      },
      axis: {
        x: {
          type: "category",
        },
        y: {
          max: this.props.item.yMax,
          label: {
            text: this.props.item.yLabel,
            position: "outer-middle",
          },
        },
      },
    });
  }

  render() {
    return (
      <div>
        <h6 className="text-center color-white">{this.props.item.title}</h6>
        {/*else - display "click on map*/}
        {this.props.item.columns.length === 0 && (
          <h6 className="text-center color-white p-1 font-italic">
            Click on map to display chart
          </h6>
        )}
        <div id={"chart" + this.props.item.chartID} className="inverted"></div>
      </div>
    );
  }
}

export default LineChart;
