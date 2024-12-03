import Board from "./Board";
import { Form } from "react-bootstrap";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const TicTacToe = () => {
  return <div className="TicTacToe">
  
    <Board />
  </div>;
};

export default TicTacToe;
