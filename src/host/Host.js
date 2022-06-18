import axios from "axios";

export const url = "https://api.maktab.abrorjonaxmadov.uz";
export const idMaktab = "7";
export const user = "44";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};
