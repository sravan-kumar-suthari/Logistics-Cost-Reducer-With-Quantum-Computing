import React, { Component } from "react";

// import { colourOptions } from "./data.js";
import { default as ReactSelect } from "react-select";
// import "./styles.css";
import { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

 const CheckBoxDropdown=({options,setRegions,selectedOptions})=>{
   const handleChange = (selected) => {
 const selectedRegions=[...selected]
 setRegions(selectedRegions)
      };
        return (
            <span
              class="d-inline-block"
              data-toggle="popover"
              data-trigger="focus"
              data-content="Please selecet regions"
            >
              <ReactSelect
                options={options}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                  Option
                }}
                onChange={handleChange}
                allowSelectAll={true}
                value={selectedOptions}
                placeholder="Select Regions"
              />
            </span>
          );


}








export default CheckBoxDropdown
