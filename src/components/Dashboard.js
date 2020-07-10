import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Map from "../components/Map";
import LeftBar from "../components/LeftBar";
import StatisticPanel from "../components/StatisticPanel";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let selectedDatasets = [];
    props.data.datasets.forEach((element) => {
      if (element.selected) {
        selectedDatasets.push(element.id);
      }
    });

    this.state = {
      baseMap: props.data.baseMap,
      dataSections: props.data.dataSections,
      datasets: props.data.datasets,
      charts: props.data.charts,
      statisticPanel: {
        show: false,
        id: 0,
      },
      selectedDatasets: selectedDatasets,
    };
  }

  updateState = (state) => {
    this.setState({ state });
  };

  updateSelectedDatasets = (state) => {
    this.setState({ selectedDatasets: state });
  };

  updateDatasets = (newdata) => {
    this.setState({ datasets: newdata });
  };

  closeInfo = () => {
    let statPanel = this.state.statisticPanel;
    statPanel.show = false;
    this.setState({ statisticPanel: statPanel });
  };
  componentDidUpdate() {}

  render() {
    return (
      <div className="position-relative dashboard-container h-80">
        <Container fluid={true} className="">
          <Row className="p-0 justify-content-center h-80">
            <Col
              sm={3}
              className=" p-2 hidden-md-down bg-black"
              style={{ zIndex: 5000 }}
            >
              <LeftBar
                sections={this.state.dataSections}
                datasets={this.state.datasets}
                statisticPanel={this.state.statisticPanel}
                updateState={this.updateState}
                updateDatasets={this.updateDatasets}
                updateSelectedDatasets={this.updateSelectedDatasets}
                selectedDatasets={this.state.selectedDatasets}
              />
            </Col>
            <Col sm={9} className="p-0">
              <Map
                dataSections={this.state.dataSections}
                datasets={this.state.datasets}
                baseMap={this.state.baseMap}
                selectedDatasets={this.state.selectedDatasets}
              />
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="position-absolute fixed-top">
          {this.state.statisticPanel.show && (
            <StatisticPanel
              item={this.state.dataSections[this.state.statisticPanel.id]}
              charts={this.state.charts}
              closeInfo={this.closeInfo}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default Dashboard;
