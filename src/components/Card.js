import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ChevronBarUp, ChevronDown, InfoCircle } from "react-bootstrap-icons";

import CardInfo from "../components/CardInfo";
import BarChart from "./BarChart";

function Card(props) {
  // mini function to add all data sets to the section
  const makeCardInfo = () => {
    return props.datasets.map((item) => {
      return (
        <div key={item.id}>
          {item.sectionID === props.item.id && (
            <CardInfo item={item} toggleDataset={props.toggleDataset} />
          )}
          {/*Add interactive chart if there is one */}
          {item.sectionID === props.item.id &&
            item.chartID &&
            item.selected && <BarChart item={props.charts[item.chartID]} />}
        </div>
      );
    });
  };

  // add all charts
  const makeCharts = () => {
    return props.charts.map((item) => {
      return (
        item.sectionID === props.item.id &&
        !item.interactive && <BarChart key={item.chartID} item={item} />
      );
    });
  };

  return (
    <div className="dataSection p-0 m-1">
      <Row className="p-2 m-1 color-white">
        <Col sm={10} className="p-0 ">
          <h4
            onClick={(e) => props.expandSection(props.item)}
            className="font-weight-normal cursor-pointer"
          >
            {props.item.title}
          </h4>
        </Col>
        <Col sm={1} className="p-0 cursor-pointer">
          <h5
            onClick={(e) => props.expandSection(props.item)}
            style={{ margin: "0.25rem 0" }}
            className="hover-highlight"
          >
            {!props.item.expanded && <ChevronDown />}
            {props.item.expanded && <ChevronBarUp />}
          </h5>
        </Col>
        <Col sm={1} className="p-1 cursor-pointer">
          <h5>
            <InfoCircle
              className="hover-highlight"
              onClick={(e) => props.click(props.item)}
            />
          </h5>
        </Col>
      </Row>
      {/* add bars to the section */}
      {props.item.expanded && makeCharts()}
      {/* Add all data sets to the section*/}
      {props.item.expanded && makeCardInfo()}
    </div>
  );
}

export default Card;
