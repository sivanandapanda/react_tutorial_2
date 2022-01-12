import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph is running");
  return <p>{props.children}</p>;
};

export default MyParagraph;
