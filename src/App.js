import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Navbar from "./components/navbar";
import UserProfile from "./components/userprofile";
import ApiFetch from "./services/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSignSuccess } from "./slice/user/auth";
import { getItem } from "./localstorage/saveToke";
import Article from "./components/showarticle";
import CreateArticle from "./components/createArticle";
import EditArticle from "./components/edit";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await ApiFetch.GetUser();
      dispatch(userSignSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/create" element={<CreateArticle />} />
        <Route path="/edit/:slug" element={<EditArticle />} />
        <Route
          path="*"
          element={
            <h5 className="font-bold text-center my-5">
              not found the page!!!
            </h5>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
