import React from "react";

function OddPlayers({ players }) {
  const oddPlayers = players.filter((_, index) => index % 2 === 0);

  return (
    <ul>
      {oddPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
}

export default OddPlayers;
