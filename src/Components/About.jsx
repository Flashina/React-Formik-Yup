import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Welcome to SQI    {id}</div>;
};

export default About;
