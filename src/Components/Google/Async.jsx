import React, { useState, useEffect } from "react";
import axios from "axios";

const Async = () => {
  const endpoint = "https://jsonplaceholder.typicode.com/users";
  const [details, setDetails] = useState([]);
  // const fetchdetails = async () => {
  //   const response = await axios.get(endpoint)

  //   console.log(response);
  // }

  // const fetchdetails = () => {
  //   axios.get(endpoint).then((response) => {
  //     setDetails(response.data)
  //     console.log(response.data);
  //   })
  // };

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  let url = "http://localhost:5000/user/register";
  const fetchdetails = () => {
    axios.post(url, { FirstName: "John", LastName: "Peace" });
  };

  return (
    <div>
      <button onClick={fetchdetails}>Fetch</button>
      {details.map((item, index) => (
        <h2 key={index}>{item.name}</h2>
      ))}
    </div>
  );
};

export default Async;
