import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../Components/Layout";
 
const Products = () => {
    return (
      <Layout sidebar>
        <Container>
          <Row>
            <Col>
                <h3>Products</h3>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
}
 
Products.propTypes = {};
 
export default Products;