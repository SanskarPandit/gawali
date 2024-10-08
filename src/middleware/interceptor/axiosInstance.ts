import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"https://milk-backend-v1.onrender.com"
})

axiosInstance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem("token");
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config
    },
(error)=>{
    return Promise.reject(error)
})
axiosInstance.interceptors.response.use(
    (response)=>{
        return response
    },

    (error)=>{
        if (error.response && error.response.status === 401) {
            // Example: handle unauthorized errors (e.g., redirect to login)
          }
          return Promise.reject(error);
    }
)

export default axiosInstance;