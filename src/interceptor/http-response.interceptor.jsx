// import { _AuthApi } from "api/auth";
import { _axios as Axios } from "../interceptor/http-config";

export const HttpResponseInterceptor = (navigate, enqueueSnackbar) => {
  Axios.interceptors.response.use(
    function (response) {
      // Do something with response data
      switch (response?.config?.method) {
        case "post":
          enqueueSnackbar("Done", response.data.message, {
            variant: "success",
            autoHideDuration: 3000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
          break;
        case "put":
          enqueueSnackbar("Updated", response.data.message, {
            variant: "success",
            autoHideDuration: 3000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
          break;
        // case "patch":
        //   enqueueSnackbar(response.data.message, {
        //     variant: "success",
        //     autoHideDuration: 3000,
        //     anchorOrigin: { vertical: "bottom", horizontal: "right" },
        //   });
        //   break;
        case "delete":
          enqueueSnackbar("Deleted", response.data.message, {
            variant: "success",
            autoHideDuration: 3000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
          break;

        default:
          break;
      }

      return response;
    },
    function (error) {
      // make a copy of the original request to do it again incase we need to refresh the token

      switch (error?.response?.status) {
        case 404:
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
            autoHideDuration: 3000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
          break;

        case 422:
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
            autoHideDuration: 3000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
          break;

        case 500:
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
            autoHideDuration: 3000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
          break;

        case 405:
          Object.keys(error.response.data.message).map((key) =>
            enqueueSnackbar(error.response.data.message[key], {
              variant: "error",
              autoHideDuration: 3000,
              anchorOrigin: { vertical: "bottom", horizontal: "right" },
            })
          );
          break;

        case 401:
          navigate("/");
          // _AuthApi.destroyToken(); 
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
            autoHideDuration: 3000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
          break;

        case 403:
          // _AuthApi.destroyToken();
          navigate("/");
          break;

        // case 400:
        default:
          enqueueSnackbar(error.response?.data?.message, {
            variant: "error",
            autoHideDuration: 3000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });

          break;
      }

      return Promise.reject(error);
    }
  );
};

// hello
