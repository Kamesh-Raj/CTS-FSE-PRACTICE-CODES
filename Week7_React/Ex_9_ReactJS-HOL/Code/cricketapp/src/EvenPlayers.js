import React from "react";

function EvenPlayers({ players }) {
  const evenPlayers = players.filter((_, index) => index % 2 !== 0);

  return (
    <ul>
      {evenPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
}

export default EvenPlayers;
