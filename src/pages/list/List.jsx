import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
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
          <h3 class="card-title">Plan Shipment</h3>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Region</Form.Label>
          <Form.Control
            required
            type="text"
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Source Regional WH</Form.Label>
          <Form.Control
            required
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Destination WH</Form.Label>
          <Form.Control
            required
            type="text"
          />
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

export default List
