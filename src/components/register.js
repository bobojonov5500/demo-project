import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
} from "../slice/user/auth";
import { useMutation } from "react-query";
import ApiFetch from "../services/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isLoading, user, LoggedIn } = useSelector((state) => state.auth);

  const HandleSubmit = async () => {
    dispatch(registerUserStart());
    const user = {
      username,
      password,
      email,
    };
    try {
      const response = await ApiFetch.UserRegister(user);
      console.log(response);
      dispatch(registerUserSuccess());
      if (LoggedIn) {
        alert("user logged successfully");
      }
    } catch (error) {
      alert(error.message);
    }
    dispatch(registerUserFailure());
  };
  return (
    <div>
      <div className=" font-[sans-serif]">
        <div className=" flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8  rounded-2xl  bg-white shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold">
                Sign up
              </h2>
              <form className="mt-8 space-y-4">
                <Input
                  label={"Username"}
                  type={"text"}
                  state={username}
                  setstate={setUsername}
                />
                <Input
                  label={"Password"}
                  type={"password"}
                  state={password}
                  setstate={setPassword}
                />
                <Input
                  label={"Email"}
                  type={"email"}
                  state={email}
                  setstate={setEmail}
                />
                <div className="!mt-8">
                  <button
                    onClick={HandleSubmit}
                    type="button"
                    className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    {isLoading ? "loading..." : "Sign Up"}
                  </button>
                </div>
                <p className="text-gray-800 text-sm !mt-8 text-center">
                  If do you have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Login
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

export default Register;
