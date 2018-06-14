# Front-End Technical Test

NOTE: rThis repository only holds the code to spin up a server, to set up the API necessary to complete this coding challenge

You must use [ReactJS](https://reactjs.org/) to complete this challenge.

This is a simple front-end code challenge created to serve two purposes:

1.  Test your eye for design
1.  Give us a better understanding of your skills.

## The Task

The programming challenge exists in 2 parts:

- Part A: Design
- Part B: Functionality

### PART A: Design

#### Goal Card

![Screen](./images/goal_card.png)

#### Goal Details

![Screen](./images/goal_details.png)

#### Create the goal card

- Create a layout based on the image above, "Goal Card".
- Style the layout consistently, adhering as closely to the design as possible.

#### Create the goal details view

- Create a layout base on the image above, "Goal Card Details"
- Implement it as a full page view
- Style the layout consistently, adhering as closely to the design as possible.

### PART B: Functionality

- Consume this API
  - @http://localhost:3001/api/goals?length=100 to retrieve a list of _random_ `#LootGoals`
  - @http://localhost:3001/api/goals to retrieve a list of _static_ `#LootGoals`
  - @http://localhost:3001/api/goals/[goal_id] to retrieve a _single_ `#LootGoals`

The API will return this object structure of random data, any null values should be handled appropriately in the UI.

```json
{
  "balance": "number",
  "description": "string",
  "amount": "number",
  "percentage": "number",
  "id": "string",
  "image_url": "string | null",
  "name": "string",
  "date": "string | null",
  "status": "string"
}
```

- Display the first 10 goals using the UI created in PART A, sticking to the layout, placing data where it fits.
- Display the full page details view when a user selects a goal, request the details of a single goal.

## Additional Instructions

This repository is will spin up a server and will serve the endpoints mentioned above.

#### Getting started

- Clone this repository
- Install dependencies `npm install`
- Start server `npm start`
- Server will be available from `http://localhost:3001/api`

#### Submitting

- After you're done, provide us the link to your repository.
- Leave comments where you were not sure how to properly proceed.

## Tool suggestions

Here is a list of suggestions that may help you out.
You are free to use any tools you prefer and are not required to use any in the list below.

- [Create React App](https://github.com/facebook/create-react-app)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Axios](https://github.com/axios/axios)

## Bonus Points

- Tests
- Clean code
- Knowledge of application flow.
- Knowledge of modern best practices/coding patterns.
- Demonstration of good state management.
- Good component structure thinking.
- Usage of linters.
- Time Complexity Considerations
