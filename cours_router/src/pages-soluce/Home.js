import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/profile/1">Profile 1</Link>
        </li>
        <li>
          <Link to="/profile/2">Profile 2</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/user/1">User 1</Link>
        </li>
        <li>
          <Link to="/user/2">User 2</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
