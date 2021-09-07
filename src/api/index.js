import axios from "axios";
import * as APIConstants from "./constants";
import moment from "moment";
import { message } from "antd";

/**
 * @name fetchApi
 * @description will fet the data based on params supplied
 * @param {string} param
 * @param {string} method
 * @param {object} variables
 */
export const fetchApi = (param = null, method = null, variables = null) => {
  return axios({
    method: method,
    url: param,
    headers: {
        
        'Content-Type': 'application/x-www-form-urlencoded'
      },
     credentials: 'same-origin',
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        let { status } = err.response;
        if (status === 401) {
          message.error("Unauthorised User")
          return false
        } else if (status === 400 || status === 404) {
          //
          const {data, code} = err.response;
          if (data && data.response) {
            return data;
          } 
          
          if (code) {
            return err.response;
          } else {
            return false;
          }
        }
      } else return false;
    });
}
