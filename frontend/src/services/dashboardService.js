import axios from "axios";

const CHILD_API = `${import.meta.env.VITE_API_URL}/api/children`;
const MOOD_API = `${import.meta.env.VITE_API_URL}/api/moods`;
const ACTIVITY_API = `${import.meta.env.VITE_API_URL}/api/activity-progress`;

export const getChild = async (id) => {
  return await axios.get(`${CHILD_API}/${id}`);
};

export const getMood = async (childId) => {
  return await axios.get(`${MOOD_API}/${childId}`);
};

export const getActivities = async (childId) => {
  return await axios.get(`${ACTIVITY_API}/${childId}`);
};