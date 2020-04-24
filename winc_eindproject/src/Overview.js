import React from "react"
import Checkboxes from "./components/Checkboxes"
import Chart from "./components/Chart"


const Overview =function(props) {


    return (
      <div>
      <Checkboxes onchecked={props.onChecked} checkbox={props.checkbox}/>
      <
      Chart data = {props.grafiekdata} checked={props.checkbox}
      />

      </div>
    )
  }



export default Overview
