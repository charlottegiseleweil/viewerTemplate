import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ChevronBarUp, ChevronDown } from "react-bootstrap-icons";

class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
    };
  }

  makeLegend = () => {
    if (!this.state.isCollapsed) {
      return this.props.selectedDatasets.map((id) => {
        let dataset = this.props.datasets[id];
        return (
          dataset.legendSrc && (
            <Row className="legend m-0" key={dataset.id}>
              <h5 className="font-weight-normal m-0">{dataset.title}</h5>
              <img
                src={
                  dataset.legendSrc &&
                  require("../data/legends/" + dataset.legendSrc)
                }
                alt="legend"
                width="100%"
              />
            </Row>
          )
        );
      });
    }
    return <Row className="legend m-0"></Row>;
  };

  toggleCollapse = () => {
    const isCollapsed = this.state.isCollapsed;
    this.setState({ isCollapsed: !isCollapsed });
  };

  render() {
    return (
      <Col
        sm={4}
        className="p-0 position-absolute fixed-top fixed-right ml-auto  m-1"
      >
        {this.makeLegend()}
        <Row className="p-0 m-0">
          <Col
            sm={1}
            className="ml-auto offset-sm-11 p-1 dataSection cursor-pointer color-white"
            onClick={() => this.toggleCollapse()}
          >
            <h6 className="text-center m-0 hover-highlight ">
              {!this.state.isCollapsed && <ChevronBarUp />}
              {this.state.isCollapsed && <ChevronDown />}
            </h6>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Legend;
