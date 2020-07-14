import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contributor(props) {
  return (
    <Col md={3}>
      <img
        src={props.contributor.img ? props.contributor.img : props.noImg}
        alt="profile"
        width="100%"
      />
      <Row className="justify-content-center">
        <h5 className="m-0 text-center font-weight-normal">
          {props.contributor.name}
        </h5>
      </Row>
      <Row className="justify-content-center">
        <h6 className=" text-center font-italic font-weight-light p-1 m-0 ">
          {props.contributor.jobTitle}
        </h6>
      </Row>
    </Col>
  );
}

export default Contributor;
