import axios from "axios";
const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`;

export const getProfile = (token) => axios.get(`${baseUrl}/`, config(token));
export const editProfile = (body, token) =>
  axios.patch(`${baseUrl}/edit`, body, config(token));
