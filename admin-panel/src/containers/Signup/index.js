import React from "react";
import Layout from "../../Components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../Components/UI/Input";

/**
 * @author Bharathraj
 * @function Signup
 **/

const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="Firstname"
                    placeholder="Firstname"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Lastname"
                    placeholder="Lastname"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Input
                    label="Contact Number"
                    placeholder="Mobile Number"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                label="Email address"
                placeholder="Enter Email address"
                type="email"
                value=""
                onChange={() => {}}
                errorMessage="We'll never share your email with anyone else."
              />

              <Input
                label="Password"
                placeholder="Enter Password"
                type="password"
                errorMessage="Set a Strong password."
                value=""
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
