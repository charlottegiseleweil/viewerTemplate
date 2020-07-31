import React from "react";
import { useSpring, animated } from "react-spring";
import Row from "react-bootstrap/Row";
import { XSquare } from "react-bootstrap-icons";
import ModalImage from "react-modal-image";

function SecondaryPanel(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  // add infotext
  const makeInfotext = () => {
    return props.item.infotext.map((item) => {
      return (
        <div key={item.subtitle} className="m-1 p-1 color-white">
          <Row className=" m-0">
            <h4
              className="font-weight-normal m-0"
              style={{ borderBottom: "2px solid var(--highlight-color)" }}
            >
              {item.subtitle}
            </h4>
          </Row>
          <Row className=" m-0">
            <h6 className="font-weight-light m-0">{item.text}</h6>
          </Row>
        </div>
      );
    });
  };

  return (
    <animated.div className="p-2 border-right Infobox h-80" style={style}>
      <Row style={{ padding: "0 1rem" }}>
        <h3
          className="font-weight-normal color-white"
          style={{ borderBottom: "2px solid var(--highlight-color)" }}
        >
          {props.item.title}
        </h3>
        <h4 className="ml-auto color-white">
          <XSquare
            className="cursor-pointer hover-highlight"
            onClick={() => props.closeInfo()}
          />
        </h4>
      </Row>
      {props.item.infotext && makeInfotext()}
      {props.item.img && (
        <Row>
          <ModalImage
            className="p-3"
            small={require("../static/images/" + props.item.img)}
            large={require("../static/images/" + props.item.img)}
            hideZoom={true}
          />
          ;
        </Row>
      )}
    </animated.div>
  );
}

export default SecondaryPanel;
