import React, { Component } from 'react';
import { getGoal } from "../services/api";
import { mapCard } from "../components/mappers/cardMapper";

class GoalDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { card: "" };
  };

  componentDidMount = () => {
    getGoal(this.props.location.id)
    .then(data =>
      {this.setState({
        card: mapCard(data, 'card-details', 'Release funds')
      })
    })
    .catch(error => console.log(error.message));
  };

  render() {
    return (
      <div>
        {this.state.card}
      </div>
    );
  }
}

export default GoalDetails;
