import React, { useState } from "react";
import ApiFetch from "../services/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postarticleFailure,
  postarticleStart,
  postarticleSuccess,
} from "../slice/user/articleslice";
import Loader from "./loader";

const CreateArticle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.article);
  const [formvalue, setFormvalue] = useState({
    article: {
      title: "",
      body: "",
      description: "",
    },
  });
  const [error, setError] = useState("");
  const HandlePost = async () => {
    dispatch(postarticleStart());
    try {
      const { article } = formvalue;
      if (
        article.body !== "" &&
        article.description !== "" &&
        article.title !== ""
      ) {
        await ApiFetch.PostArticle(formvalue);
        navigate("/");
        dispatch(postarticleSuccess());
      } else {
        setError("All fields are required ");
        dispatch(postarticleFailure());
      }
    } catch (error) {
      dispatch(postarticleFailure());
      alert(error.message);
    }
  };
  return (
    <div className="">
      <div className="max-w-lg mx-auto mt-3 ">
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium">
            Title
          </label>
          <input
            onChange={(e) =>
              setFormvalue({
                ...formvalue,
                article: { ...formvalue.article, title: e.target.value },
              })
            }
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="title"
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="body" className="block mb-2 text-sm font-medium">
            Body
          </label>
          <input
            onChange={(e) =>
              setFormvalue({
                ...formvalue,
                article: { ...formvalue.article, body: e.target.value },
              })
            }
            type="text"
            id="body"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="title"
            required
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            onChange={(e) =>
              setFormvalue({
                ...formvalue,
                article: { ...formvalue.article, description: e.target.value },
              })
            }
            rows={"4"}
            placeholder="description"
            name="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          ></textarea>
        </div>
        <div className={`${error === "" ? "hidden" : ""}`}>
          <span className="text-red-500">{error}</span>
        </div>
        <button
          onClick={HandlePost}
          type="submit"
          className="bg-green-500 rounded-md mt-3 px-4 py-1 text-white active:text-black"
        >
          {isLoading ? "Loading..." : "send"}
        </button>
      </div>
    </div>
  );
};

export default CreateArticle;
