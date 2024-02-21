import axios from "axios";

export const api = axios.create({
  baseURL: "http://economia.awesomeapi.com.br/",
  timeout: 5 * 1000,
});
