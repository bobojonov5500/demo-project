import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiFetch from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import {
  articleDetailsFailure,
  articleDetailsStart,
  articleDetailsSuccess,
} from "../slice/user/articleslice";
import moment from "moment";
import Loader from "./loader";

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, articleDetails, error } = useSelector(
    (state) => state.article
  );

  const GetArticleDetails = async () => {
    dispatch(articleDetailsStart());
    try {
      const response = await ApiFetch.GetArticleDetails(id);
      dispatch(articleDetailsSuccess(response.article));
    } catch (error) {
      dispatch(articleDetailsFailure(error.message));
    }
  };
  useEffect(() => {
    GetArticleDetails();
  }, [id]);
  return (
    <div className="container border-2 mx-auto">
      {isLoading && <Loader />}
      <div className="text-center ">
        <p className="font-bold ">{articleDetails?.author?.username}</p>
        <p>{articleDetails?.title}</p>
        <p className="">{articleDetails?.author?.bio}</p>
        <p>{articleDetails?.body}</p>
        <p>{articleDetails?.description}</p>
        <span className="font-bold  text-slate-700">
          Created Time: {moment(articleDetails?.createdAt).format("D-MM-YYYY")}
        </span>
      </div>
    </div>
  );
};

export default Article;
