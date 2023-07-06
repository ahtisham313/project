import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem('profile')).token
//     }`;
//   }
// });

const url = 'http://localhost:5000';

export const addApplicant = async (applicantData) => {
  //   console.log("Api Reached");
  console.log(applicantData);
  await axios.post(`${url}/stylady`, applicantData);
};
export const addLogin = (Login) => {
  //   console.log("Api Reached");
  return axios.post(`${url}/login`, Login);
};
export const createProduct = async (product) => {
  //   console.log("Api Reached");
  // console.log(productData);
  await axios.post(`${url}/product`, product);
};
// export const createProduct= async (product)  => {
//   console.log("APII")
//   await axios.post(`${url}/product`, product)
// }

// import axios from "axios";

// export const addApplicant = async (user) => {
//   try {
//     const response = await axios.post("/api/users/register", user);
//     return response.data;
//   } catch (error) {
//     throw error.response.data.error;
//   }
// };
