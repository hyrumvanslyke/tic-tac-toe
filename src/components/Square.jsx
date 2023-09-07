import React from "react";

const clickHandler = (props) => {
  if (!props.squareValue) {
    if (props.player) {
      props.squares.splice(props.index, 1, "X");
      props.setSquares(props.squares);
      props.setPlayer(!props.player);
    } else {
      props.squares.splice(props.index, 1, "O");
      props.setSquares(props.squares);
      props.setPlayer(!props.player);
  }
  }
};
const Square = (props) => {
  return (
    <div className="square" onClick={clickHandler} > {props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue} </div>
  );
};
export default Square;
