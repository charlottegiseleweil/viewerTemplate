import React from "react";
import "c3/c3.css";
const c3 = require("c3");

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chart = null;
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
        type: "bar",
        x: "x-label",
        colors: this.props.item.colors,
      },
      axis: {
        x: {
          type: "category",
        },
        y: {
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
        <div id={"chart" + this.props.item.chartID} className="inverted"></div>
      </div>
    );
  }
}

export default BarChart;
