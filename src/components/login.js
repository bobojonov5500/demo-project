import React, { useEffect, useState } from "react";
import Input from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userSignFailure,
  userSignStart,
  userSignSuccess,
} from "../slice/user/auth";
import ApiFetch from "../services/api";
import Validation from "./validation-errors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, LoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const HandlerLogin = async () => {
    const user = {
      email,
      password,
    };
    dispatch(userSignStart());
    try {
      const response = await ApiFetch.UserLogin(user);
      dispatch(userSignSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(userSignFailure(error.response.data.errors));
    }
  };
  useEffect(() => {
    if (LoggedIn) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <div className=" font-[sans-serif]">
        <div className=" flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8  rounded-2xl  bg-white shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold">
                Sign in
              </h2>
              <Validation />
              <form className="mt-8 space-y-4">
                <Input
                  label={"Email"}
                  type={"email"}
                  state={email}
                  setstate={setEmail}
                />
                <Input
                  label={"Password"}
                  type={"password"}
                  state={password}
                  setstate={setPassword}
                />
                <div className="!mt-8">
                  <button
                    onClick={HandlerLogin}
                    type="button"
                    className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    {isLoading ? "loading..." : "Sign in"}
                  </button>
                </div>
                <p className="text-gray-800 text-sm !mt-8 text-center">
                  Don't have an account?{" "}
                  <Link
                    to={"/register"}
                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
