import React from "react"
import AlleData from "./mockdata/allemockdata"
import ChooseStudent from "./components/ChooseStudent"
import StudentChart from "./components/StudentChart"

class Students extends React.Component{

constructor(){
  super()
    this.state={
      data:AlleData
    }

}
render(){

  const onOption= event => {
    const name = event.target.value
    this.setState(()=> {
      return {value:name}})
  }


return(<div>
  <ChooseStudent onOption={onOption}/>
  <StudentChart data={this.state.data} value={this.state.value}/>
  </div>)
}
}



export default Students
