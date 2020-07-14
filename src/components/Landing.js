import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const natcapLogo = require("../static/images/natcap.png"); // Add your own images like this

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
              Viewer Template
            </h1>
          </Row>

          {/* Project information*/}
          <Row className=" m-0 justify-content-md-center landingSection">
            <h5 className="p-4 font-weight-light ">
              The viewer template is created to be used by researchers who are
              non-visualization developers but want to communicate their spatial
              data as map-layers on a website. The template can through a
              minimum amount of coding be adjusted to display shapefiles,
              tilesets, and rasters on maps in addition to summarising data in
              bar charts. Places to include information about the specific
              project as well as descriptions and methods for creating the
              datasets is also be provided. <br />
              <br />
              Get started by cloning the codebase in the{" "}
              <a href="https://github.com/charlottegiseleweil/viewerTemplate">
                Github repo{" "}
              </a>
              or explore our deployed{" "}
              <a href="http://viz.naturalcapitalproject.org/viewerTempla">
                demo-version
              </a>
              .
              <br />
              <br />
              Questions, comments, or feedback about the viewer? Please send us
              an <a href="mailto: chweil@stanford.edu">email</a>
            </h5>
          </Row>

          {/* natcap logo*/}
          <Row className=" m-1 justify-content-md-center landingSection p-0">
            <img
              className="landingSection justify-content-md-center "
              src={natcapLogo}
              alt="Logo"
              width="40%"
            />
          </Row>

          {/*Start exploring button*/}
          <Row
            className="hover-opacity m-0 p-2 position-sticky fixed-bottom justify-content-md-center cursor-pointer"
            onClick={(e) => props.updateState({ showLandingPage: false })}
          >
            <h3
              className="font-weight-normal"
              style={{
                color: "var(--background-color) ",
              }}
            >
              Start Exploring
            </h3>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
