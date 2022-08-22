import axios from "axios";

export const url = "https://api.maktab.abrorjonaxmadov.uz";
export const idMaktab = "17";
export const user = "27";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};
