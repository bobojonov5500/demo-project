import { React, useEffect, useState } from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";
import { useNavigate, useParams } from "react-router-dom";
import ApiFetch from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import {
  articleDetailsFailure,
  articleDetailsStart,
  articleDetailsSuccess,
  postarticleFailure,
  postarticleStart,
  postarticleSuccess,
} from "../slice/user/articleslice";
import Validation from "./validation-errors";

const EditArticle = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.article);
  const navigate = useNavigate();

  const GetArticle = async () => {
    dispatch(articleDetailsStart());
    try {
      const { article } = await ApiFetch.GetArticleDetails(slug);
      setBody(article.body);
      setTitle(article.title);
      setDescription(article.description);
      dispatch(articleDetailsSuccess());
    } catch (error) {
      dispatch(articleDetailsFailure());
    }
  };
  const onEdit = async () => {
    dispatch(postarticleStart());
    const article = { title, body, description };
    try {
      await ApiFetch.EditArticle(slug, { article });
      dispatch(postarticleSuccess());
      navigate("/");
    } catch ({ response }) {
      console.log(response.data.errors);
      dispatch(postarticleFailure(response.data.errors));
    }
  };
  useEffect(() => {
    GetArticle();
  }, []);
  return (
    <div className="px-4">
      <div className="max-w-lg mx-auto mt-3">
        <p className="font-bold text-2xl text-center">Edit Article</p>
        <Input
          label={"title"}
          type={"text"}
          state={title}
          setstate={setTitle}
        />
        <Input label={"body"} type={"text"} state={body} setstate={setBody} />
        <TextArea
          label={"description"}
          type={"text"}
          state={description}
          setstate={setDescription}
        />
        <div>
          <button
            onClick={onEdit}
            type="submit"
            className="bg-green-500 rounded-md mt-3 px-4 py-1 text-white active:text-black"
          >
            {isLoading ? "Loading..." : "send"}
          </button>
          <Validation />
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
