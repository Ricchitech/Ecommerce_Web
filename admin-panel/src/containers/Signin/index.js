import React from 'react';
import Layout from "../../Components/Layout";
import { Container, Form, Button,Row,Col } from "react-bootstrap";
import Input from "../../Components/UI/Input";
import {login} from '../../actions';
import {useDispatch} from 'react-redux';

 /**
 * @author Bharathraj
 * @function Signin
 **/

const Signin = () => {

  const dispatch = useDispatch();

  const userLogin=(e)=>{
    e.preventDefault();
    const user ={
      email:'brg2289@gmail.com',
      password:'123456'
    }
    dispatch(login(user));  
  }


    return (
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
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

                <Button  variant="primary" type="submit">
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