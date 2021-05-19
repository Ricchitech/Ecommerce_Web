import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../Components/UI/Input";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";
import { useEffect } from "react";

/**
 * @author Bharathraj
 * @function Signup
 **/

const Signup = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!user.loading) {
  //     setfirstName("");
  //     setLastName("");
  //     setEmail("");
  //     setPassword("");
  //   }
  // }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

   if (user.loading) {
     return <p>Loading...! Please Wait!!!!</p>;
   }

  return (
    <Layout>
      <Container>
        {user.message}
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="Firstname"
                    placeholder="Firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Lastname"
                    placeholder="Lastname"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

              {/* <Row>
                <Col md={12}>
                  <Input
                    label="Contact Number"
                    placeholder="Mobile Number"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row> */}

              <Input
                label="Email address"
                placeholder="Enter Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage="We'll never share your email with anyone else."
              />

              <Input
                label="Password"
                placeholder="Enter Password"
                type="password"
                errorMessage="Set a Strong password."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
