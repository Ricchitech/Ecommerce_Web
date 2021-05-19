import React from "react";
import { Jumbotron, Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Components/Layout";
import './style.css';
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">Sidebar</Col>
          <Col md={10} style={{marginLeft: 'auto'}}>Container</Col>
        </Row>
      </Container>

      {/* <Jumbotron style={{ margin: "0", background: "#fff" }}>
        <h1>Admin Panel</h1>
        <p>
          Corporate Web design has certain elements designed to attract
          customers. One of those elements is the introduction. The page or
          website introduction does what you would think: it introduces the
          website or page to the user and entices them to visit more of the
          website.
        </p>
      </Jumbotron> */}
    </Layout>
  );
};

export default Home;
