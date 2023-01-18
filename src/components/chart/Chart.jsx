import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
const [smShow, setSmShow] = useState(false);
const [lgShow, setLgShow] = useState(false);

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
          <Button onClick={() => setLgShow(true)}>ADD</Button>
       </div>
    </div>
    <Modal closeButton
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <div className="controls">
      <Places
          setOffice={(position) => {
            setOffice(position);
            mapRef.current?.panTo(position);
          }}
        />
        {!office && <p>Enter the address</p>}
        {directions && <Distance leg={directions.routes[0].legs[0]} />}
         </div>
         <GoogleMapsContainer/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
   </div>
  )
}

export default Chart;
