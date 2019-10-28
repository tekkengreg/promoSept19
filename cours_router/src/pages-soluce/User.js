import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  console.log(id);
  return <div>User number {id}</div>;
};

export default User;
