import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const register = (username, email, password) => {
  return axios.post(API_URL + "auth/signup", {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "auth/signin", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout
};
