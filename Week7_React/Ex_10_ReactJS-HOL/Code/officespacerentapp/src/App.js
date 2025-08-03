import React from "react";
import "./App.css";

function App() {
  const element = "Office Space";
  const jsxattr = (
  <img
    src="https://media.licdn.com/dms/image/v2/D5605AQE8iUuE3o9EuA/feedshare-thumbnail_720_1280/feedshare-thumbnail_720_1280/0/1725975880593?e=2147483647&v=beta&t=gItmtZLdwnWvG7rWQFd4lQwMscA41ZfJkrwgqQ-1sks"
    width="50%"
    height="50%"
    alt="Office Space"
  />
);
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
  };

  const colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push("textRed");
  } else {
    colors.push("textGreen");
  }

  return (
    <div className="App">
      <h1>
        {element}, at Affordable Range
      </h1>
      {jsxattr}
      <h2>Name: {ItemName.Name}</h2>
      <h3 className={colors.join(" ")}>
        Rent: Rs. {ItemName.Rent}
      </h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
