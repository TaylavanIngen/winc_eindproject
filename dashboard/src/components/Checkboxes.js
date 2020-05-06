import React from "react"

const Checkboxes= function(props){

  return(<form>
      <label>
        Hoe leuk?
        <input
          type={"checkbox"}
          name="leukBox"
          onChange={props.onchecked}
          checked={props.checkbox.leukBox}
        />
      </label>
      <label>
        Hoe moeilijk?
        <input
          type={"checkbox"}
          name="moeilijkBox"
          onChange={props.onchecked}
          checked={props.checkbox.moeilijkBox}
        />
      </label>
    </form>)
}
export default Checkboxes
