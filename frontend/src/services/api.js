import axios from "axios";
import { GOALS_ENDPOINT, GOAL_ENDPOINT } from "../services/api-endpoints";

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

async function getGoals(length = 100) {
  // NEED FIX: for some reason when using length, sending a request with a goal id does not work later.
  const endpoint = `${GOALS_ENDPOINT}?length=${length}`;
  try {
    const response = await axios(REQUEST_CONFIG("GET", endpoint));
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getGoalsStatic() {
  try {
    const response = await axios(REQUEST_CONFIG("GET", GOALS_ENDPOINT));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getGoal(id) {
  const endpoint = `${GOALS_ENDPOINT}/${id}`;
  try {
    const response = await axios(REQUEST_CONFIG("GET", endpoint));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getGoals, getGoal, getGoalsStatic };
