import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

export const Client = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
  }),
  options
);
