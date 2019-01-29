import axios from "axios";

axios.defaults.baseURL = "https://developer.nps.gov/api/vi";
axios.defaults.params = {
  api_key: process.env.VUE_APP_API_KEY
};

export default {};
