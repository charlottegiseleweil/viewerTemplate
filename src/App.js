import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import Data from "./data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewerTitle: "Your viewer Name",
      menuLinks: [
        {
          title: "Dashboard",
          path: "/",
          page: <DashboardPage props={Data().dashboard1} />,
        },
        {
          title: "About",
          path: "/about",
          page: <AboutPage />,
        },
      ],
    };
  }
  componentDidMount() {}

  makeHeaderLinks = (headerlinks) => {
    return headerlinks.map((item) => {
      return (
        <NavLink
          className="nav-link"
          exact={true}
          activeStyle={{ color: "#059700" }}
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
          <Navbar className="border-bottom h-10">
            <Navbar.Brand>{this.state.viewerTitle}</Navbar.Brand>
            <Nav className="ml-auto">
              {this.makeHeaderLinks(this.state.menuLinks)}
            </Nav>
          </Navbar>

          {/* Main content of each page*/}
          {this.makeRouter(this.state.menuLinks)}

          {/* Footer*/}
          <Footer />
        </Container>
        {/*<LandingPage />*/}
      </Router>
    );
  }
}

export default App;
