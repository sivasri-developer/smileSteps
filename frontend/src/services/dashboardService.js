import axios from "axios";

const CHILD_API = "http://localhost:5000/api/children";
const MOOD_API = "http://localhost:5000/api/moods";
const ACTIVITY_API = "http://localhost:5000/api/activity-progress";

export const getChild = async (id) => {
  return await axios.get(`${CHILD_API}/${id}`);
};

export const getMood = async (childId) => {
  return await axios.get(`${MOOD_API}/${childId}`);
};

export const getActivities = async (childId) => {
  return await axios.get(`${ACTIVITY_API}/${childId}`);
};