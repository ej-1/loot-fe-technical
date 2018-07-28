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

class Goals extends Component {

  constructor(props) {
    super(props);
    this.state = { goals: "", cards: "" };
  };

  mapCardsToComponents = (data) => {
    return data.slice(0, 10).map((data) => 
    <CardTemplate {...{
      //id: id,
      componentType: 'card',
      imageUrl: data.image_url,
      imageText: data.name,
      //description: data.description,
      //status: data.status,
      amountUsed: `£ ${data.balance}.00`, // sloppy. change this later.
      amountLimit: `£ ${data.amount}.00`, // sloppy. change this later.
      showDetailsButton: true,
      progressBar: data.percentage,
      progressFilledColor: "#f6cb47",
      endDate: new Date(data.date).toDateString(),
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
    .catch(error => console.log(error.message)); // Promise
    console.log("ERIK STATE", this.state);

  };

  render() {
    return (
      <div>
        <Link to='/details' to={{ pathname: '/details', cardDetails:  {componentTyp: 'card-details', ...cardDetails}  }} >Create Idea</Link>
        <h1>My React App!</h1>
        {this.state.data}
        {console.log("ERIK STATE 2", this.state)}
        <CardTemplate {...card} />
        <CardTemplate {...cardDetails} />
        {this.state.cards && this.state.cards}
      </div>
    );
  }
}

export default Goals;
