import axios from "axios";

const API_URL = "http://localhost:5000/api/moods";

export const saveMood = async (data) => {
  return await axios.post(API_URL, data);
};