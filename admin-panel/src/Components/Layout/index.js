import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
import { sidebardata } from "./sidebardata";
//import Logo from "./images/brg.jpg";

/**
 * @author Bharathraj
 * @function Layout
 *
 * */
const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col>
              <div className="sidebardiv">
                <div>
                  <img
                    src={require("./images/logo.png").default}
                    className="logo"
                  />
                </div>
                <ul className="sidebarlist">
                  {sidebardata.map((val, key) => {
                    return (
                      <li
                        key={key}
                        className="row"
                        id={
                          window.location.pathname == val.link ? "active" : ""
                        }
                        onClick={() => {
                          window.location.pathname = val.link;
                        }}
                      >
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
              <Col md={12}>
                {props.children}
              </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
