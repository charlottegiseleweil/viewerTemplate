import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardInfo(props) {
  return (
    <Row className="dataSection m-1 dataset">
      <Col sm={10} className=" p-0">
        <h5 className="font-weight-normal">{props.item.title}</h5>
      </Col>
      <Col sm={1} className="p-0 ">
        <div className="custom-control custom-switch cursor-pointer">
          <input
            type="checkbox"
            className="custom-control-input"
            id={props.item.id}
            onClick={(e) => props.toggleDataset(props.item.id)}
            checked={props.item.selected}
            readOnly
          />
          <label
            className="custom-control-label cursor-pointer"
            htmlFor={props.item.id}
          ></label>
        </div>
      </Col>
      <Col sm={1} className="p-0"></Col>
    </Row>
  );
}

export default CardInfo;
