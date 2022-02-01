import axios from "axios";

export const url = "http://62.209.143.146:8003";
export const idMaktab = "7";
export const user = "44";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};