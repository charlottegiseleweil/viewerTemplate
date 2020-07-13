import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import Card from "../components/Card";

class LeftBar extends React.Component {
  showInfo = (id) => {
    let statisticPanel = this.props.statisticPanel;
    statisticPanel.show =
      statisticPanel.show && statisticPanel.id === id ? false : true;
    statisticPanel.id = id;
    this.props.updateState(statisticPanel);
  };

  expandSection = (id) => {
    let dataSections = [...this.props.sections];
    dataSections[id].expanded = dataSections[id].expanded ? false : true;
    this.props.updateState(dataSections);
  };

  toggleDataset = (id) => {
    let datasets = [].concat([...this.props.datasets]);
    datasets[id].selected = datasets[id].selected ? false : true;
    this.props.updateDatasets(datasets);

    let selectedDatasets = [...this.props.selectedDatasets];
    datasets[id].selected
      ? selectedDatasets.push(id)
      : selectedDatasets.splice(selectedDatasets.indexOf(id), 1);
    this.props.updateSelectedDatasets(selectedDatasets);
  };

  makeCards = (dataSections) => {
    return dataSections.map((item) => {
      return (
        <Card
          item={item}
          key={item.id}
          datasets={this.props.datasets}
          click={() => this.showInfo(item.id)}
          expandSection={() => this.expandSection(item.id)}
          toggleDataset={this.toggleDataset}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true} className="p-0 color-white leftbar">
        <h1
          className=" p-2 font-weight-light"
          style={{ borderBottom: "3px solid var(--highlight-color)" }}
        >
          Explore
        </h1>
        <Col className="p-0">{this.makeCards(this.props.sections)}</Col>
      </Container>
    );
  }
}

export default LeftBar;
