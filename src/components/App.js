import React, { Component } from "react";
//import Card from "../components/cards/card";
import CardTemplate from "../components/cards/card-template";

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
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <CardTemplate {...card} />
        <CardTemplate {...cardDetails} />
      </div>
    );
  }
}

export default App;
