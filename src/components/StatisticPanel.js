import React from "react";
import { useSpring, animated } from "react-spring";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { XSquare } from "react-bootstrap-icons";

import BarChart from "./BarChart";

function StatisticPanel(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  const makeCharts = () => {
    return props.charts.map((item) => {
      return (
        item.sectionID === props.item.id && (
          <BarChart key={item.chartID} item={item} />
        )
      );
    });
  };

  const makeInfotext = () => {
    return props.item.infotext.map((item) => {
      return (
        <Row className="p-1 m-1" key={item.subtitle}>
          <h6 className="font-weight-light">{item.subtitle}</h6>
          <p>{item.text}</p>
        </Row>
      );
    });
  };

  return (
    <Row className="p-0">
      <Col sm={3} className="p-0 offset-sm-3">
        <animated.div className="p-2 border-right Infobox h-80" style={style}>
          <Row style={{ padding: "0 1rem" }}>
            <h4 className="font-weight-normal">{props.item.title}</h4>
            <h4 className="ml-auto">
              <XSquare
                className="cursor-pointer"
                onClick={() => props.closeInfo()}
              />
            </h4>
          </Row>

          {makeCharts()}
          {props.item.infotext && makeInfotext()}
        </animated.div>
      </Col>
    </Row>
  );
}

export default StatisticPanel;
