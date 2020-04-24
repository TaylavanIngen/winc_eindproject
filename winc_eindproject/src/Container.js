import React from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Students from "./Students"
import Overview from "./Overview"
import Studenten from "./mockdata/studenten"
import Reviews from "./mockdata/reviews"
import Opdrachten from "./mockdata/opdrachten"

class Container extends React.Component {

  constructor() {
    super();

    this.state = {
      students:Studenten,
      opdrachten:Opdrachten,
      reviews:Reviews,
      checkbox:{leukBox: true,
                moeilijkBox: true}


    }
  }




    render(){

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


  // reken array gemiddelde uit
  const getAverage = (array) => {
    let sum = array.reduce((total, item) => item += total)
    let average = Math.round((sum / array.length) * 100) / 100
    return average
  }

  // reken gemiddelde moeilijkheid uit per opdracht
  const gemiddeldeMoeilijkheidPerOpdracht= (opdrachtId) => {
    const alleReviews = this.state.reviews.filter(review => review.opdrachtId === opdrachtId)
    const alleReviewsMoeilijkheid = alleReviews.map(item => item.moeilijkheid)
    const gemiddeldeMoeilijkheid = getAverage(alleReviewsMoeilijkheid)
    return gemiddeldeMoeilijkheid
  }





  // reken gemiddelde leukheid uit per opdracht
  const gemiddeldeLeukheidPerOpdracht = (opdrachtId) => {
    const alleReviews = this.state.reviews.filter(review => review.opdrachtId === opdrachtId)
    const alleReviewsLeukheid = alleReviews.map(item => item.leukheid)
    const gemiddeldeLeukheid = getAverage(alleReviewsLeukheid)
    return gemiddeldeLeukheid
  }


  const alleOpdrachtenGrafiek = this.state.opdrachten.map(opdracht => {
    const moeilijkheidGemiddeld = gemiddeldeMoeilijkheidPerOpdracht(opdracht.id)
    const leukheidGemiddeld = gemiddeldeLeukheidPerOpdracht(opdracht.id)
    return({id: opdracht.id, opdracht: opdracht.name, moeilijkheid: moeilijkheidGemiddeld, leukheid: leukheidGemiddeld})

  })

    return (

      <Router>
        <div>
          <header>
            <h1>Winc Student Dashboard </h1>
          </header>
          <nav>
            <Link className="home" to="/">
              Home
            </Link>
            <Link className="students" to="/students">
              Studenten
            </Link>

          </nav>
          <Switch>
            <Route path="/" exact render={(props) => <Overview {...props} state={this.state} checkbox={this.state.checkbox} grafiekdata= {alleOpdrachtenGrafiek} onChecked={ onChecked}/>}/>
            <Route path="/students" render={(props)=><Students state={this.state}/>}/>
          </Switch>
          <hr></hr>
          <footer>Winc Academy 2020</footer>
        </div>
      </Router>

  )

}
}

export default Container
