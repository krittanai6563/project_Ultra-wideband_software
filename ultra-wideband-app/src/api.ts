import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://projectuwb-27b59-default-rtdb.firebaseio.com/esp32/json/Position.json';

interface ApiServiceInterface {
  init(): void;
  get<T>(resource: string): Promise<AxiosResponse<T>>;
}

const ApiService: ApiServiceInterface = {
  init() {
    axios.defaults.baseURL = API_URL;
  },

  get<T>(resource: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(resource);
  },
};

export default ApiService;