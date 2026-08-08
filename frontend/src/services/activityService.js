import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/activity-progress`;

export const saveActivityProgress = async (data) => {
  return await axios.post(API_URL, data);
};

export const getActivityProgress = async (childId) => {
  return await axios.get(`${API_URL}/${childId}`);
};