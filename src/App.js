import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
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
      title: "Your viewer Name",
      headerlinks: [
        {
          title: "Dashboard",
          path: "/",
          page: <DashboardPage props={Data().dashboard1} />,
        },
        { title: "About", path: "/about", page: <AboutPage /> },
      ],
    };
  }
  componentDidMount() {}

  makeHeaderLinks = (headerlinks) => {
    return headerlinks.map((item) => {
      return (
        <Link className="nav-link" to={item.path} key={item.title}>
          {item.title}
        </Link>
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
            <Navbar.Brand>{this.state.title}</Navbar.Brand>
            <Nav className="ml-auto">
              {this.makeHeaderLinks(this.state.headerlinks)}
            </Nav>
          </Navbar>

          {/* Main content of each page*/}
          {this.makeRouter(this.state.headerlinks)}

          {/* Footer*/}
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
