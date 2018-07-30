import React, { Component } from 'react';
import { getGoals } from "../services/api";
import { mapTenCards } from "../components/mappers/cardMapper";

class Goals extends Component {

  constructor(props) {
    super(props);
    this.state = { cards: "" };
  };

  componentDidMount = () => {
    getGoals()
    .then(data =>
      {this.setState({
        cards: mapTenCards(data)
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
