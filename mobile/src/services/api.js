import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-backend01.herokuapp.com/"
});

export default api;
