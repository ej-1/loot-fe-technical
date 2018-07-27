import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Card from "../components/cards/card";
import CardTemplate from "./components/cards/card-template";

import { API_DEFAULT_DATA } from "./services/api-config";
import { getGoals } from "./services/api";

const cardDetailsStyle = {
  width: "380px",
  height: "300px"
};

const cardStyle = {
  width: "180px",
  height: "250px"
};

const card = {
  componentType: 'card',
  imageUrl: "src/components/cards/new_york.jpg",
  imageText: "NEW YORK",
  amountUsed: "£ 600.00",
  amountLimit: "£ 1000.00",
  showDetailsButton: true,
  progressBar: "40",
  progressFilledColor: "#f6cb47",
  endDate: "By 15th June 2018",
  cardStyle: cardStyle
};

const cardDetails = {
  componentType: 'card-details',
  imageUrl: "src/components/cards/new_york.jpg",
  imageText: null,
  amountUsed: "£ 600.00",
  amountLimit: "£ 1000.00",
  title: "New York",
  description: "something something",
  showDetailsButton: true,
  progressBar: "40",
  progressFilledColor: "#f6cb47",
  endDate: "By 15th June 2018",
  cardStyle: cardDetailsStyle
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { goals: "" };
  };

  getGoals = () => {
    getGoals()
      .then(data => this.setState({ goals: data }))
      .catch(error => console.log(error.message)); // Promise
  };

  onComponentMount = () => {
    getGoals();
    console.log("THIS IS STATE", this.state.data);
  };

  render() {
    return (
      <div>
        <h1>My React App!</h1>
        {this.state.data}
        <CardTemplate {...card} />
        <CardTemplate {...cardDetails} />
      </div>
    );
  }
}

export default App;
