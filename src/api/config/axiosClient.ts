import { BaseUrl } from "@/utils/BaseUrl";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${BaseUrl}api/`,
});
export default axiosClient;
