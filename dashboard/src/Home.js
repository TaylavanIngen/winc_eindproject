import React from "react"
import Reviews from "./data/reviews"
import Checkboxes from "./components/Checkboxes"
import Chart from "./components/Chart"


class Home extends React.Component {
constructor(){

  super()

  this.state={
    data:Reviews,
    checkbox:{leukBox: true,
              moeilijkBox: true}
  }
}

    render () {

        //checkbox handler

        const onChecked=(event)=>{
          const input = event.target.checked
          const name=event.target.name
          this.setState(prevState=>{
          const checkbox=prevState.checkbox
          checkbox[name]= input
            return {checkbox: checkbox}

        })
      }
      
    return(  <div>
      <Checkboxes onchecked={onChecked} checkbox={this.state.checkbox}/>
      <
      Chart data = {this.state.data} checked={this.state.checkbox}
      />

      </div>)
    }
  }



export default Home
