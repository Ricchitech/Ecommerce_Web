import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
import { sidebardata } from "./sidebardata";
import { useSelector } from "react-redux";

/**
 * @author Bharathraj
 * @function Layout
 *
 * */
const Layout = (props) => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid fixed="top" style={{ marginTop: "60px" }}>
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
                <center className="bottomcontent">
                  <h5 className="usersname">{auth.user.fullName}</h5>
                  <h6 className="roleofuser">({auth.user.role})</h6>
                </center>
              </div>
            </Col>
            <Col md={12} style={{ margin: "auto", paddingTop: "80px" }}>
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
