import axios from "axios";

const url = "https://fa21-bse-072-0692f3063cc0.herokuapp.com";

export const addApplicant = async (applicantData) => {
  //   console.log("Api Reached");
  console.log(applicantData);
  await axios.post(`${url}/stylady`, applicantData);
};
export const addLogin = async (LoginData) => {
  //   console.log("Api Reached");
  console.log(LoginData);
  await axios.post(`${url}/stylady`, LoginData);
};
// import axios from "axios";

// export const addApplicant = async (user) => {
//   try {
//     const response = await axios.post("/api/users/register", user);
//     return response.data;
//   } catch (error) {
//     throw error.response.data.error;
//   }
// };
