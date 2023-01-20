import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./chart.scss"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import React , {useState } from 'react';
import GoogleMapsContainer from "../googleMaps/GoogleMapsContainer";
import Places from '../googleMaps/Places';
import Distance from '../googleMaps/Distance';
import {useMemo, useCallback, useRef } from "react";
const Chart = () => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [office, setOffice] = useState();
const [directions, setDirections] = useState();
const mapRef = useRef();
const center = useMemo(
  () => ({ lat: 43.45, lng: -80.49 }),
  []
);
const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
    <Navbar/>
    <br/>

    <div class="card">
        <div class="card-body">
          <h3 class="card-title">Locations</h3>
          <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
       </div>
    </div>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Search Address</Form.Label>
        <Places
          setOffice={(position) => {
            setOffice(position);
            mapRef.current?.panTo(position);
          }}
        />
        {directions && <Distance leg={directions.routes[0].legs[0]} />}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Is Source?" />
      </Form.Group>

        </div>
        <br/>
        <div>
        <GoogleMapsContainer/>
        </div>
        </Modal.Body>
      </Modal>
    </div>
   </div>
  )
}

export default Chart;
