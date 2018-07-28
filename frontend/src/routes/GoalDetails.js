import React, { Component } from 'react';
//import Card from "../components/cards/card";
import CardTemplate from "../components/cards/card-template";

import { API_DEFAULT_DATA } from "../services/api-config";
import { getGoals } from "../services/api";

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

class GoalDetails extends Component {

  render() {
    return (
      <div>
        {console.log("PROPS CARD DETAILS", this.props.location.cardDetails)}
        <CardTemplate {...this.props.location.cardDetails} />
      </div>
    );
  }
}

export default GoalDetails;

/*
  amountLimit: "£ 1000.00"
  ​​
  amountUsed: "£ 600.00"
  ​​
  cardStyle: Object { width: "380px", height: "300px" }
  ​​
  componentType: "card-details"
  ​​
  description: "something something"
  ​​
  endDate: "By 15th June 2018"
  ​​
  imageText: null
  ​​
  imageUrl: "src/components/cards/new_york.jpg"
  ​​
  progressBar: "40"
  ​​
  progressFilledColor: "#f6cb47"
  ​​
  showDetailsButton: true
  ​​
  title: "New York"
*/