import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}/api/moods`;
export const saveMood = async (data) => {
  return await axios.post(API_URL, data);
};