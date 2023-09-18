import React, { useState, useEffect } from "react";
import axios from "axios";

const Githubapi = () => {
  const endpoint = "https://api.github.com/users";
  const [apiDetails, setApiDetails] = useState([]);

  const fetchApiDetails = () => {
    axios
      .get(endpoint)
      .then((response) => {
        setApiDetails(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button
        className="btn btn-outline-info m-4 p-2"
        onClick={fetchApiDetails}
      >
        Fetch Github
      </button>
      {apiDetails.map((item, index) => (
        <div className="container">
          <div className="row">
            <div key={index} className="card m-5" style={{ width: "18rem" }}>
              <img
                src={item.avatar_url}
                className="card-img-top rounded-circle mx-auto mt-3"
                style={{ width: "12rem" }}
                alt=""
              />
              <div className="card-body">
                {/* <h5 className="card-title">Users</h5>
            <h5 className="card-title">Id:{item.id}</h5>
            <h3 className="card-title">Name:{item.login}</h3> */}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  <h6>Id:{item.id}</h6>
                </li>
                <li className="list-group-item text-center">
                  <h3>Name:{item.login} </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>

        // <span>
        //   <h5>{item.id}</h5>,<h1>{item.login} </h1>
        // </span>
      ))}
    </>
  );
};

export default Githubapi;
