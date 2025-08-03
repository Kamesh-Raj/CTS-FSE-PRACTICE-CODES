import React from "react";

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome, User! You can now book your tickets.</h1>;
  }
  return <h1>Welcome, Guest! Please login to book tickets.</h1>;
}

export default Greeting;
