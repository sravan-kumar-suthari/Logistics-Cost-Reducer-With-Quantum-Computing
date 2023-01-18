import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./featured.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Featured = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
    <Navbar/>
    <br/>
        <div class="card">
        <div class="card-body">
          <h3 class="card-title">Vehicle Details</h3>
              <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Vehicle ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Capacity (lts)</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Fuel consumption (kms) </Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Emissions</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured
