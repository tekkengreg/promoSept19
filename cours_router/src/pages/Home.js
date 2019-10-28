import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> Home </h1>
      <ul>
        <li>
          <Link to="/user/1">Go to User 1</Link>
        </li>
        <li>
          <Link to="/user/2">Go to User 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
