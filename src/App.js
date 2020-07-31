import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { PatchQuestion } from "react-bootstrap-icons";

import Footer from "./components/Footer";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./components/Landing";
import Data from "./data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewerTitle: "viewerTemplate",
      menuLinks: [
        {
          title: "Explorer",
          path: "/",
          page: <DashboardPage props={Data().explorer} />,
        },
        {
          title: "About",
          path: "/about",
          page: <AboutPage />,
        },
      ],
      showLandingPage: Data().explorer.config.showLandingPage,
    };
  }

  updateState = (state) => {
    this.setState(state);
  };

  makeHeaderLinks = (headerlinks) => {
    return headerlinks.map((item) => {
      return (
        <NavLink
          className="nav-link"
          exact={true}
          activeStyle={{ color: "var(--highlight-color)" }}
          to={item.path}
          key={item.title}
        >
          {item.title}
        </NavLink>
      );
    });
  };

  makeRouter = (headerlinks) => {
    return headerlinks.map((item) => {
      return (
        <Route
          path={item.path}
          exact
          render={() => item.page}
          key={item.title}
        />
      );
    });
  };

  render() {
    return (
      <Router basename="/">
        <Container className="p-0 h-100" fluid={true}>
          {/* Menubar*/}
          <Navbar className="h-10 bg-nav" variant="dark">
            <Navbar.Brand>{this.state.viewerTitle}</Navbar.Brand>
            <Nav className="ml-auto">
              {this.makeHeaderLinks(this.state.menuLinks)}
              <h5
                className="nav-link cursor-pointer"
                onClick={() => this.setState({ showLandingPage: true })}
              >
                <PatchQuestion />
              </h5>
            </Nav>
          </Navbar>

          {/* Main content of each page*/}
          {this.makeRouter(this.state.menuLinks)}

          {/* Footer*/}
          <Footer />
        </Container>

        {/* Landing page*/}
        {this.state.showLandingPage && (
          <LandingPage
            name={this.state.viewerTitle}
            updateState={this.updateState}
          />
        )}
      </Router>
    );
  }
}

export default App;
