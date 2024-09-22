import axios from "../services/baseURL";

const ApiFetch = {
  UserRegister: async (user) => {
    const { data } = await axios.post("/users", { user });
    return data;
  },
  UserLogin: async (user) => {
    const { data } = await axios.post("/users/login", { user });
    return data;
  },
  GetUser: async () => {
    const { response } = await axios.get("/user");
  },
};

export default ApiFetch;
