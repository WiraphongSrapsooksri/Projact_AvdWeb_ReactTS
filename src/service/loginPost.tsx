import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
const HOST: string = "http://localhost:3000"; 

export class LoginService {
  async loginPost(username: string, password: string) {
    const url = `${HOST}/login`;
    
    try {
      // Send user credentials as part of the request payload
      const response = await axios.post(url, {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        // Assuming your server sends a successful response for a valid login
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error during login:', error);
      return false; // Handle error, e.g., network issues
    }
  }
}
