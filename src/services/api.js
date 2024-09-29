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
    const { data } = await axios.get("/user");
    return data;
  },
  GetArticles: async () => {
    const { data } = await axios.get("/articles");
    return data;
  },
  GetArticleDetails: async (slug) => {
    const { data } = await axios.get(`/articles/${slug}`);
    return data;
  },
};

export default ApiFetch;
