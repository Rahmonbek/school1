import axios from "axios";

export const url = "http://62.209.143.146:8003";
export const idMaktab = "3";
export const user = "6";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};