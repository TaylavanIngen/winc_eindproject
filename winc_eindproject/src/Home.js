import React from "react"
import Reviews from "./mockdata/reviews"
import Opdrachten from "./mockdata/opdrachten"
import Studenten from "./mockdata/studenten"
import AlleData from "./mockdata/allemockdata"
import Checkboxes from "./components/Checkboxes"
// import CheckboxesStudents from "./components/CheckboxesStudents.js"
import Chart from "./components/Chart"


class Home extends React.Component {
constructor(){

  super()

  this.state={
    data:{Reviews: Reviews,
          Opdrachten: Opdrachten,
          Students: Studenten,
          AlleData: AlleData
        },
    checkbox:{leukBox: true,
              moeilijkBox: true},
    // checkboxStudents:{Evelyn:true,
    //                   Aranka:true,
    //                   Floris:true,
    //                   Hector:true,
    //                   Martina:true,
    //                   Maurits:true,
    //                   Rahima:true,
    //                   Sandra:true,
    //                   Wietske:true,
    //                   Storm:true}
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
            return {checkbox: checkbox,
                    checkboxStudents:checkbox}

        })
      }

    return(  <div>

      <Checkboxes onchecked={onChecked} checkbox={this.state.checkbox}/>
      <
      Chart data = {this.state.data} checked={this.state.checkbox}
      // students={this.state.checkboxStudents}
      />

      </div>)
    }
  }



export default Home
