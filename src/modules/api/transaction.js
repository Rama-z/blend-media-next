import axios from "axios";
const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction`;
export const createTransaction = (body, token) =>
  axios.post(`${baseUrl}/create`, body, config(token));
