import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InfoCircle } from "react-bootstrap-icons";

const headerImg = require("../static/images/aboutHeader.png"); // Add your own header image

function LandingPage(props) {
  return (
    <Container
      fluid={true}
      className="position-absolute fixed-top landingContainer"
    >
      <Row className="justify-content-center p-5 m-5">
        <Col md={8} className="landingSquare p-0">
          {/* Here you can include the sections you want on your landing page*/}
          <Row className="p-3 m-0 justify-content-md-center">
            <h1 className="text-center font-weight-light m-2 p-0 ">
              Welcome to the {props.name}
            </h1>
          </Row>

          {/* Header image*/}
          <img
            className="landingSection justify-content-md-center "
            src={headerImg}
            alt="header"
            width="100%"
          />

          {/* Project information*/}
          <Row className=" m-0 justify-content-md-center landingSection">
            <h5 className="p-4 font-weight-normal ">
              Information about the Project... Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
              vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
              venenatis vitae, justo. Nullam dictum felis eu pede mollis
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
              nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            </h5>
          </Row>

          {/* How to use the viewer */}
          <Row className="p-1 m-0 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              How to use the viewer
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className="m-0 justify-content-md-center landingSection">
            <h5 className=" p-4 font-weight-normal ">
              Select map layers using the left menu. See summarised data by
              clicking the <InfoCircle /> Icon. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
              <br />
              <br />
              Questions, comments, or feedback about the viewer? Please send us
              an <a href="mailto: abc@example.com">email</a>
            </h5>
          </Row>

          {/*Start exploring button*/}
          <Row
            className="m-0 p-2 position-sticky fixed-bottom justify-content-md-center cursor-pointer"
            style={{ backgroundColor: "#059700" }}
            onClick={(e) => props.updateState({ showLandingPage: false })}
          >
            <h3 className="text-white font-weight-normal">Start Exploring</h3>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
