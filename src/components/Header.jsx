import React from "react";
import "./Header.css";
import { Button } from "./UI/Button";
export const Header = () => {
  return (
    <header>
      <nav className="block">
        <h1>Favorite Movies</h1>
        <Button className="add-movie">ADD MOVIE</Button>
      </nav>
    </header>
  );
};
