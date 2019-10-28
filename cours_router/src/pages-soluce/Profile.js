import React from "react";
import { withRouter } from "react-router-dom";

const Profile = ({ match, location, history }) => {
  console.log(match, location, history);
  return <div>profile number {match.params.id}</div>;
};

export default withRouter(Profile);
