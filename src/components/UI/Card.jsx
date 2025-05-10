import React from "react";
import "./Card.css";
import { Cards } from "../../Utils/constants/main";
import { Button } from "./Button";
export const Card = () => {
  return (
    <div className="container">
      {Cards.map((item) => (
        <div className="card">
          <div>
            <img src={item.img} alt="" />
          </div>
          <div className="box">
            <h1>{item.title}</h1>
            <div className="btn">
              <p>{item.rating}/5 stars</p>
              <Button className="delete">Delete</Button>
              <Button className="edit">Edit</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
