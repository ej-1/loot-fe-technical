import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './routes/Goals'
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Card from "../components/cards/card";
import CardTemplate from "./components/cards/card-template";

import { API_DEFAULT_DATA } from "./services/api-config";
import { getGoals } from "./services/api";
import GoalDetails from './routes/GoalDetails';

const cardDetailsStyle = {
  width: "380px",
  height: "300px"
};

const cardStyle = {
  width: "180px",
  height: "250px"
};

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
