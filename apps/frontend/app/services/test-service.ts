import type { AxiosResponse } from "axios";
import dtsApiClient from "./data-validation-api-client";
import type { CreateCatDto } from "@packages/api-client";

export const testService = {
  testGet: async (): Promise<AxiosResponse<string>> => {
    return await dtsApiClient.appControllerGetHello();
  },

  createCat: async (catname: string): Promise<void> => {
    const request: CreateCatDto = {
      name: catname
    };

    await dtsApiClient.appControllerCreate(request);
  }
};
