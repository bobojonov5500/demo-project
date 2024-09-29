import React, { useEffect } from "react";
import ApiFetch from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import {
  articleFailure,
  articleStart,
  articleSuccess,
} from "../slice/user/articleslice";
import Loader from "./loader";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { article, isLoading } = useSelector((state) => state.article);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const GetArticles = async () => {
    dispatch(articleStart());
    try {
      const response = await ApiFetch.GetArticles();
      dispatch(articleSuccess(response.articles));
    } catch (error) {
      dispatch(articleFailure());
    }
  };
  useEffect(() => {
    GetArticles();
  }, []);
  return (
    <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8">
      {isLoading && <Loader />}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-5 ">
        {article?.map((item) => (
          <div
            key={item?.id}
            className="flex  h-auto   flex-col justify-between bg-white shadow-sm border border-slate-200 rounded-lg max-w-68 sm:max-w-60 md:max-w-72"
          >
            <div className="p-6">
              <span className="">{item?.title}</span>
              <h4 className="mb-1 text-xl font-semibold text-slate-800">
                {item?.author?.username}
              </h4>
              <p className="text-base text-slate-600 mt-4 font-light ">
                {item?.description}
              </p>
            </div>
            <div className="flex-wrap flex  p-6 pt-2 gap-2">
              <button
                onClick={() => navigate(`/article/${item.slug}`)}
                className="min-w-26  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Show
              </button>
              <button className="min-w-26 rounded-md bg-green-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Edit
              </button>
              <button className="min-w-26 rounded-md bg-red-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
