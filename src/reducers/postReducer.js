
import {
    GET_COURSES,
  } from "../actions/types";
  
  const initialState = {
    courses: [],
  };
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_COURSES:
        return {
          ...state,
          posts: payload,
        };
     
      default:
        return state;
    }
  };