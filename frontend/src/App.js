import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Goals from "./routes/Goals";
import GoalDetails from "./routes/GoalDetails";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Goals} />
            <Route path="/details" exact component={GoalDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
