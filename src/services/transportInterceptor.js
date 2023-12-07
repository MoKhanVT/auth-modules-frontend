import axios from "axios";
import { toast } from "react-toastify";


const initTransportInterceptor = (store) => {


    // TODO: Token should be sent using this snippet
    /*
    axios
      .interceptors
      .request
      .use(
        (config) => {
          const token = localStorage.getItem('Token');
  
          config.headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          };
  
          return config;
        },
      );
    */

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (err) => {
            const error = {
                status: err?.response?.status,
                title: err?.response?.data?.detail,
            };

            if (error.status === 401 && err?.response?.statusText === "Unauthorized") {
                localStorage.clear();
                const message = `${error.status} / ${error.title}`;
                toast.error(message);
            }
            else {
                const message = `${error.status} / ${error.title}`;
                toast.error(message);
            }

          console.log({error, err})


            return Promise.reject(err);

        }
    );
};

const initInterceptors = (store) => {
    initTransportInterceptor(store);
};

export default initInterceptors;
