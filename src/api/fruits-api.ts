import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

import type { Fruit } from "../types";

class FruitApi {
  #fruitApi: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  public getAllFruits = async (): Promise<
    AxiosResponse<Fruit[], any> | undefined
  > => {
    try {
      const response: AxiosResponse<Array<Fruit>> = await this.#fruitApi.get(
        "/api/fruit/all"
      );

      return response;
    } catch (error) {
      throw error;
    }
  };

  public getFruitsByFamily = async (
    family: string
  ): Promise<AxiosResponse<Fruit[], any> | undefined> => {
    try {
      const config: AxiosRequestConfig = {
        params: {
          family,
        } as RawAxiosRequestHeaders,
      };

      const response: AxiosResponse<Array<Fruit>> = await this.#fruitApi.get(
        "/api/fruit/family",
        config
      );

      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default FruitApi;
