import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearItem } from "../localstorage/saveToke";
import { userLogout } from "../slice/user/auth";

const Navbar = () => {
  const [toggle, setToggel] = useState(false);
  const { LoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandlerLogOut = () => {
    clearItem("token");
    dispatch(userLogout());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-999 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="flex flex-1 items-center  ">
            <div className="">
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src={
                    "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  }
                  alt="Your Company"
                />
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="flex gap-2">
                <Link
                  to={"/create"}
                  className={`${
                    LoggedIn ? "" : "hidden"
                  } rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                >
                  Create article
                </Link>
                <Link
                  className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  to={`${LoggedIn ? "/profile" : "/login"}`}
                >
                  {LoggedIn ? `${user?.username}` : "Login"}
                </Link>
                {LoggedIn ? (
                  <button
                    onClick={HandlerLogOut}
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Log Out
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
