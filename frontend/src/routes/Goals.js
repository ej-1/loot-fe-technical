import React, { Component } from 'react';
import { Link } from "react-router-dom";
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

const cardDetails = {
  componentType: 'card-details',
  imageUrl: "src/components/cards/new_york.jpg",
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

class Goals extends Component {

  constructor(props) {
    super(props);
    this.state = { cards: "" };
  };

  mapCardsToComponents = (data) => {
    console.log(data)
    return data.slice(0, 10).map((data) => 
    <CardTemplate {...{
      //id: id,
      componentType: 'card',
      imageUrl: data.image_url,
      title: data.name,
      description: data.description,
      status: data.status,
      balance: `£ ${data.balance}.00`, // sloppy. change this later.
      amount: `£ ${data.amount}.00`, // sloppy. change this later.
      breadcrumbButton: true,
      progress: data.percentage * 100,
      progressFilledColor: { IN_PROGRESS: "#f6cb47", COMPLETED: "#00bbc6" },
      bottomText: new Date(data.date).toDateString(),
      cardStyle: data.cardStyle
    }} />);
  }

  componentDidMount = () => {
    getGoals()
    .then(data =>
      {this.setState({
        cards: this.mapCardsToComponents(data)
      })
    })
    .catch(error => console.log(error.message));
  };

  render() {
    return (
      <div>
        <Link to='/details' to={{ pathname: '/details', cardDetails:  {componentTyp: 'card-details', breadcrumbButton: false, cardStyle: cardDetailsStyle, ...cardDetails}}} >Create Idea</Link>
        {this.state.cards && this.state.cards}
      </div>
    );
  }
}

export default Goals;
