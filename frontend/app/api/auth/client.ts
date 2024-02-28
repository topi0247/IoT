import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

export const Client = applyCaseMiddleware(
  axios.create({
    baseURL: "http://localhost:3000",
  }),
  options
);
