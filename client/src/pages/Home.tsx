import React from "react";

type HomeProps = {
  name: string;
};

const Home = ({ name }: HomeProps) => {
  return <div>{name ? "Hi " + name : "You are not logged in"}</div>;
};

export default Home;
