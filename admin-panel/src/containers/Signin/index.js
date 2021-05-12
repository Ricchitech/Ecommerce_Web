import React from 'react';
import Layout from "../../Components/Layout";
import { Container, Form, Button,Row,Col } from "react-bootstrap";
import Input from "../../Components/UI/Input";
 /**
 * @author Bharathraj
 * @function Signin
 **/

const Signin = () => {
    return (
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
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
}
 

 
export default Signin;