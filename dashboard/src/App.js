import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Students from "./Students";



class App extends React.Component {
  render() {
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
            <Route path="/" exact component={Home} />
            <Route path="/students" component={Students} />

          </Switch>
          <hr></hr>
          <footer>Winc Academy- Tayla van Ingen 2020</footer>
        </div>
      </Router>
    );
  }
}
export default App;
