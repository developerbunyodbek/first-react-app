import React from "react";

const Note = () => {
  return (
    <div
      className="note"
      style={{
        margin: "20px",
        padding: "20px",
        borderRadius: 5,
        width: "30%",
        boxShadow: "0 0 5px #c3c3c3",
      }}
    >
      <h1>Title</h1>
      <p>Info</p>
    </div>
  );
};

export default Note;
