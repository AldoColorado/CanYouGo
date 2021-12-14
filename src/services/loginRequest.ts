import axios from "axios";

class loginRequest {

  async login(username: string, password: string) {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}Login`, {
        username,
        password
    });

  }

}

export default new loginRequest();