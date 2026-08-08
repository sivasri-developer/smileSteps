import axios from "axios";

const API_URL = "http://localhost:5000/api/activity-progress";

export const saveActivityProgress = async (data) => {
  return await axios.post(API_URL, data);
};

export const getActivityProgress = async (childId) => {
  return await axios.get(`${API_URL}/${childId}`);
};