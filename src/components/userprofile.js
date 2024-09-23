import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  return <div>{user?.username}</div>;
};

export default UserProfile;
