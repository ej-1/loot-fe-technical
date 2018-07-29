import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CardTemplate from "../components/cards/card-template";

import { API_DEFAULT_DATA } from "../services/api-config";
import { getGoals } from "../services/api";

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
      buttonText: 'Release funds'
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
        {this.state.cards && this.state.cards}
      </div>
    );
  }
}

export default Goals;
