import { useLoadScript } from "@react-google-maps/api";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./shipment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import MapDirections from "./MapDirections";
import CheckBoxDropdown from './CheckBoxDropdown'


const Shipment = () => {
  const [setValidated] = useState(false);
  const [selectedSourceRegions,SetSelectedSourceRegions]=useState([])
  const [selectedDestinationRegions,SetSelectedDestinationRegions]=useState([])
  const [selectedTruck,setSelectedTruck]=useState('')
  const [selectedComputing,setSelectedComputing]=useState('')

  const sourceRegionWH=[
    {value:'Hyderabad', label:'Hyderabad'},
    {value:'Delhi', label:'Delhi'},
    {value:'Kolkata', label:'Kolkata'},
    {value:'Bangalore', label:'Bangalore'},
  ];
  const destinationRegionWH=[
    {value:'Rajasthan', label:'Rajasthan'},
    {value:'Pune', label:'Pune'},
    {value:'Mumbai', label:'Mumbai'},
    {value:'Lucknow', label:'Lucknow'},
  ]

  const truckOptions=[
    {value:'selectTruck',label : 'Select Truck'},
    {value:'truck1',label : 'Truck1'},
    {value:'truck2',label : 'Truck2'},
    {value:'truck3',label : 'Truck3'},
    {value:'truck4',label : 'Truck4'}
  ]

  const computingOptions=[
    {value:'selectTypeOfComputing',label:"Select Type Of Computing"},
    {value:'cpu',label : 'CPU'},
    {value:'qpu',label : 'QPU'}
  ]
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
                <option value="North">North</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="South">South</option>
              </Form.Select>
              </Form.Group>
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Source Regional WH</Form.Label>
                </Form.Group>
                <div className='col-mb-6'>
                <CheckBoxDropdown options={sourceRegionWH} setRegions={SetSelectedSourceRegions} selectedOptions={selectedSourceRegions}/>
                </div>
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Source Regional WH</Form.Label>
                </Form.Group>
                <div className='col-mb-6'>
                <CheckBoxDropdown options={destinationRegionWH} setRegions={SetSelectedDestinationRegions} selectedOptions={selectedDestinationRegions}/>
                </div>
              </Row>
            <Button type="submit">Generate Optimal Route</Button>
          </Form>
        </div>
      </div>
      <br/>
      <div className="card">
        <div className="card-body" style={{display:"flex", justifyContent:'space-evenly'}}>
        <Form.Group as={Col} md="4" controlId="truck">
           <Form.Select aria-label="Default select example" onChange={(e)=>setSelectedTruck(e.target.value)}>
              {truckOptions.map(truck=> <option value={truck.value} key={truck.value}>{truck.label}</option> )}
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="computing">
            <Form.Select aria-label="Default select example" onChange={(e)=>setSelectedComputing(e.target.value)}>
              {computingOptions.map(computing=> <option value={computing.value} key={computing.value}>{computing.label}</option> )}
            </Form.Select>
        </Form.Group>
        </div>
      </div>
    </div>
  </div>
)
}

export default Shipment;
