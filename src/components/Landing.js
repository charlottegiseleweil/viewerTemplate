import React from "react";
import Container from "react-bootstrap/Container";

function LandingPage() {
  return (
    <Container
      fluid={true}
      className="position-absolute fixed-top"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: 6000,
      }}
    ></Container>
  );
}

export default LandingPage;
