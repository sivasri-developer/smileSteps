import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/activity-progress`;

// Save completed activity
export const saveActivityProgress = async (data) => {
  return await axios.post(API_URL, data);
};

// Get completed activities of a child
export const getActivityProgress = async (childId) => {
  return await axios.get(`${API_URL}/${childId}`);
};