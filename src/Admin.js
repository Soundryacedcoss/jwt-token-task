import React from "react";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const navigate = useNavigate();
//   navigate to back button button
  const BackHandler = () => {
    navigate("/");
  };
  return (
    // admin page
    <div style={{ margin: "3% 29%" }} I>
      <div className="card">
        <div className="card-body">
          {" "}
          <h2>welcome Admin!</h2>{" "}
          <button className="btn btn-success" onClick={BackHandler}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
