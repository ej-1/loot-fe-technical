import axios from "axios";
import { GOALS_ENDPOINT } from "../services/api-endpoints";

const REQUEST_CONFIG = (requestType, url) => ({
  method: requestType,
  url: url,
  mode: "cors",
  cache: "default", // It is caching.
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  redirect: "follow",
  referrer: "no-referrer"
});

/*
  @http://localhost:3001/api/goals?length=100 to retrieve a list of random #LootGoals
  @http://localhost:3001/api/goals to retrieve a list of static #LootGoals
  @http://localhost:3001/api/goals/[goal_id] to retrieve a single #LootGoals
*/
/*
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
*/
async function getGoals(length = 100) {
  try {
    const response = await axios(
      REQUEST_CONFIG("GET", "http://localhost:3001/api/goals")
    );
    return response.data; //.json();
  } catch (error) {
    console.error(error);
  }
}

async function getGoal(id) {
  try {
    const response = await axios(
      REQUEST_CONFIG("GET", `http://localhost:3001/api/goal/${id}`)
    );
    return response.data; //.json();
  } catch (error) {
    console.error(error);
  }
}

async function getGoalsStatic() {
  try {
    const response = await axios(
      REQUEST_CONFIG("GET", "http://localhost:3001/api/goal")
    );
    return response.data; //.json();
  } catch (error) {
    console.error(error);
  }
}

async function getGoal(id) {
  const payload = `/${id}`;
  const endpoint = GOALS_ENDPOINT + payload;
  let response = await fetch(endpoint, REQUEST_CONFIG("GET"));
  return response.json();
}

export { getGoals, getGoal, getGoalsStatic };
