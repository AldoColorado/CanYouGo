import axios from "axios";

class anonymousRequest {
  async getNegocioss() {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}Negocio`);
  }

  public getAuthHeaders(): { Authorization: string } {
    return { Authorization: `Access-Control-Allow-Origin` };
  }

  async getNegocios() {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}Negocio`);
  }

  async getSucursales() {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}Sucursal`);
  }

}

export default new anonymousRequest();
