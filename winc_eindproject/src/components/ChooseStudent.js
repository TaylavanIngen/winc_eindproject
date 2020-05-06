import React from "react"

const ChooseStudent= function (props){

return(
  <form>
  <select onChange={props.onOption}>
  <option value="Evelyn">Evelyn</option>
  <option value="Aranka">Aranka</option>
  <option value="Floris">Floris</option>
  <option value="Hector">Hector</option>
  <option value="Martina">Martina</option>
  <option value="Maurits">Maurits</option>
  <option value="Rahima">Rahima</option>
  <option value="Sandra">Sandra</option>
  <option value="Wietske">Wietske</option>
  <option value="Storm">Storm</option>
  </select>
  </form>
)

}

export default ChooseStudent
