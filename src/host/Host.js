import axios from "axios";

export const url = "https://api.maktab.abrorjonaxmadov.uz";
export const idMaktab = "6";
export const user = "38";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};
