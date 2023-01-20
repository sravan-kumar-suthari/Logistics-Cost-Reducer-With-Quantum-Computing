import { useLoadScript } from "@react-google-maps/api";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
import "./shipment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MapDirections from "./MapDirections";
// import Card from 'react-bootstrap/Card';

const Shipment = () => {
  const [setValidated] = useState(false);
  const [sourceField, setSourceField] = useState([]);
  const [destField, setDestField] = useState([]);

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
          <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Region</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>North</option>
                <option value="1">East</option>
                <option value="2">West</option>
                <option value="3">South</option>
              </Form.Select>
              </Form.Group>
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Source Regional WH</Form.Label>
                  <Form.Control as="select" multiple value={sourceField} onChange={e => setSourceField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                  </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Destination WH</Form.Label>
                  <Form.Control as="select" multiple value={destField} onChange={e => setDestField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                  </Form.Control>
              </Form.Group>
            </Row>
            <Button type="submit">Generate Optimal Route</Button>
          </Form>
        </div>
      </div>
      <br/>
      <div class="card">
        <div class="card-body">
        <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
        <Tab eventKey="truck_1" title="Truck 1">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" fill>
              <Tab eventKey="cpu" title="CPU"> <MapDirections/></Tab>
              <Tab eventKey="qpu" title="QPU"> <MapDirections/> </Tab>
            </Tabs>
        </Tab>
        <Tab eventKey="truck_2" title="Truck 2">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" fill>
              <Tab eventKey="cpu" title="CPU"> <MapDirections/> </Tab>
              <Tab eventKey="Qpu" title="QPU"> <MapDirections/> </Tab>
            </Tabs>
        </Tab>
        </Tabs>
        </div>
      </div>
    </div>
  </div>
)
}

export default Shipment;
