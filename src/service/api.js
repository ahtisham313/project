import axios from "axios";

// const url = "https://fa21-bse-072-0692f3063cc0.herokuapp.com";
 const url = "http://localhost:5000";

export const addApplicant = async (applicantData) => {
  //   console.log("Api Reached");
  console.log(applicantData);
  await axios.post(`${url}/stylady`, applicantData);
};
export const addLogin = async (Login) => {
  //   console.log("Api Reached");
  console.log(Login);
  await axios.post(`${url}/login`, Login);
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
