import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ChevronBarUp, ChevronDown, InfoCircle } from "react-bootstrap-icons";

import CardInfo from "../components/CardInfo";

function Card(props) {
  const makeCardInfo = () => {
    return props.datasets.map((item) => {
      return (
        item.sectionID === props.item.id && (
          <CardInfo
            item={item}
            key={item.id}
            toggleDataset={props.toggleDataset}
          />
        )
      );
    });
  };

  return (
    <div className="dataSection p-0 m-1">
      <Row className="p-2 m-1">
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
          >
            {!props.item.expanded && <ChevronDown />}
            {props.item.expanded && <ChevronBarUp />}
          </h5>
        </Col>
        <Col sm={1} className="p-0 cursor-pointer">
          <h4>
            <InfoCircle onClick={(e) => props.click(props.item)} />
          </h4>
        </Col>
      </Row>
      {props.item.expanded && makeCardInfo()}
    </div>
  );
}

export default Card;
