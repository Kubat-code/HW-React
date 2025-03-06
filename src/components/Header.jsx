import React from "react";
import "./Header.css";
import styled from "styled-components";
export const Header = () => {
  return (
    <header>
      <nav className="block">
        <h1>Favorite Movies</h1>
        <StyledButton>ADD MOVIE</StyledButton>
      </nav>
    </header>
  );
};
const StyledButton = styled.button`
  background-color: #e89b00;
  color: white;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-family: sans-serif;
  font-weight: 700;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
