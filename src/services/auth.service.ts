import { axios } from '../config/axios';

interface LoginResponse {
  // Define the structure of the response data
  // Adjust this according to the actual response structure
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

/**
 * Logs in the user with the provided email and password.
 * @param email The user's email
 * @param password The user's password
 * @returns A Promise that resolves with the response data from the login request
 */
function loginUser(email: string, password: string): Promise<LoginResponse> {
  return axios.post('/sign-in', { email, password });
}

export default {
  loginUser,
};
