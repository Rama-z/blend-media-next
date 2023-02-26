import axios from "axios";
const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};
const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth`;

export const register = (body) => axios.post(`${baseUrl}/register`, body);
export const login = (body) => axios.post(`${baseUrl}/login`, body);
export const logout = (token) =>
  axios.delete(`${baseUrl}/logout`, config(token));
