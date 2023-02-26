import axios from "axios";
const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/product`;

export const getProduct = () => axios.get(`${baseUrl}`);
export const getDetail = (id) => axios.get(`${baseUrl}/${id}`);
export const createProduct = (body, token) =>
  axios.post(`${baseUrl}/create`, body, config(token));
export const editProduct = (body, token, id) =>
  axios.patch(`${baseUrl}/edit/${id}`, body, config(token));
export const deleteProduct = (token, id) =>
  axios.delete(`${baseUrl}/delete/${id}`, config(token));
