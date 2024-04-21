import { getBaseUrl } from "../config";
import axios from "axios";
const endpoints = {
  signUp: "/user/signup",
};

const useUserApi = () => {
  const signUp = async (data = {}) => {
    let result,
      error,
      status = false;
    const options = {
      url: getBaseUrl() + endpoints.signUp,
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data,
    };
    try {
      const response = await axios(options);
      result = response.data;
      status = response.status;
    } catch (err) {
      error = err;
    } finally {
      return { result, error, status };
    }
  };
  const signIn = () => {
    console.log("Route to sign in screen");
  };
  return { signUp, signIn };
};

export default useUserApi;
