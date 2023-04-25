import React from "react";

const Testing = () => {
  const clickHandler = () => {
    console.log("button clicked");
    fetch("http://10.25.240.61:6543/")
      .then((response) => response.json())
      .then((result) => {
        console.log("hey, data is coming");
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <p>testing of front-end & back-end </p>
      <button onClick={clickHandler}>check</button>
    </div>
  );
};

export default Testing;
