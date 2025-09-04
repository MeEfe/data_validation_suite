import { DataValidationApi } from "@packages/api-client";

const dtsApiClient = new DataValidationApi({
  baseURL: "http://localhost:3001",
  secure: true,
  securityWorker: () => {
    return {
      headers: {
        Authorization: "Bearer hardcoded-123"
      }
    };
  }
});

export default dtsApiClient;
