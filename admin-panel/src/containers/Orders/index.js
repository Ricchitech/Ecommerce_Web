import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../Components/Layout"; 


const Orders = () => {
    return (
      <Layout sidebar>
        <Container>
          <Row>
            <Col>
                <h3>Orders</h3>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
};
 
export default Orders;