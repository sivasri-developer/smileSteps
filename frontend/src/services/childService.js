import axios from "axios";

const API_URL = "http://localhost:5000/api/children";

export const getChildren = async () => {
  return await axios.get(API_URL);
};