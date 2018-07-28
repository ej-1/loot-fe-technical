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
  title: "NEW YORK",
  balance: "£ 600.00",
  amount: "£ 1000.00",
  breadcrumbButton: true,
  progress: "40",
  progressFilledColor: "#f6cb47",
  bottomText: "By 15th June 2018",
  cardStyle: cardStyle
};

const cardDetails = {
  componentType: 'card-details',
  imageUrl: "src/components/cards/new_york.jpg",
  title: null,
  balance: "£ 600.00",
  amount: "£ 1000.00",
  title: "New York",
  description: "something something",
  breadcrumbButton: true,
  progress: "40",
  progressFilledColor: "#f6cb47",
  bottomText: "By 15th June 2018",
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
