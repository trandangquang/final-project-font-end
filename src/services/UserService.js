import axios from "axios"

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data)
  return res.data
}

export const registerUser = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, data);
  return res.data
}

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_URL}/user/get-details/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
// /refresh-token

export const refreshToken = async () => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/refresh-token`, {
      withCredentials: true
    });
  return res.data;
};

