import React from "react"
import StudentChart from "./components/StudentChart"

function Students (props){

let studentId;

const namenLijstje = props.state.students.map((student)=> <option key={student.id} value={student.name}>{student.name}</option>)

const onChange= (event)=>{

  studentId= event.target.key
}


  return(<div>
<form>
<select name="studentenselectie" onChange={onChange}>

{namenLijstje}</select>
</form>

<StudentChart state={props.state} student={studentId} />

    </div>)
}

export default Students
