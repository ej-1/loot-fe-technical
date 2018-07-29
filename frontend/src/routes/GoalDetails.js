import React, { Component } from 'react';
import CardTemplate from "../components/cards/card-template";

class GoalDetails extends Component {

  render() {
    return (
      <div>
        <CardTemplate {...this.props.location.cardDetails} />
      </div>
    );
  }
}

export default GoalDetails;
