import React from "react";
export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.keys(tile).map((individualKey) => {
        return (
          <div>
            <span className="tile-title" style={{ fontWeight: "bold" }}>
              {individualKey.toUpperCase()}
            </span>
            <p className="title">{tile[individualKey]}</p>
          </div>
        );
      })}
      <hr />
    </div>
  );
};
