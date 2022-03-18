import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({ theList }) => {
  return (
    <div>
      {theList.map((list) => (
        <Tile key={list} tile={list}></Tile>
      ))}
    </div>
  );
};
