import axios from "axios";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./userTypes";

const userRegisterRequest = () => {
  return {
    type: USER_REGISTER_REQUEST,
  };
};

const userRegisterSuccess = (responseData) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: responseData,
  };
};

const userRegisterFailure = (error) => {
  return {
    type: USER_REGISTER_FAILURE,
    payload: error,
  };
};

export const fetchUserRegister = (data) => {
  return function (dispatch) {
    dispatch(userRegisterRequest());
    axios
      .post("/register", data)
      .then((response) => {
        // TODO
        console.log(response.data);
        if (response.data.errors.length) {
          dispatch(userRegisterFailure(response.data.errors));
        } else {
          dispatch(userRegisterSuccess(response.data));
        }
      })
      .catch((error) => {
        // TODO
        dispatch(userRegisterFailure(error));
      });
  };
};
