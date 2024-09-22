import axios from "../services/baseURL";

const ApiFetch = {
  UserRegister: async (user) => {
    const response = await axios.post("/users", { user });
    return response.data;
  },
  UserLogin: async () => {
    const { response } = await axios.post("/users/login");
  },
  GetUser: async () => {
    const { response } = await axios.get("/user");
  },
};

export default ApiFetch;
