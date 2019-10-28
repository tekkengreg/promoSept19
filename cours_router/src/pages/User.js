import React, { useState } from "react";
import { useParams } from "react-router-dom";

const User = props => {
  const { id } = useParams();
  const [currentCard, setCurrentCard] = useState();
  const [user, setUser] = useState({ name: "toto" });
  const randomName = () => setUser({ name: "random" });
  setUser({ name: "tata" });
  setCurrentCard(3);
  return <h1>Here user number {id} is living</h1>;
};

export default User;
