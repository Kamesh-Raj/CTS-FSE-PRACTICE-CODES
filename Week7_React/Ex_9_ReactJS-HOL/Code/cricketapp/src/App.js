import React from "react";
import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers";

const players = [
  { name: "Jack", score: 50 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Ain", score: 61 },
  { name: "Elisabeth", score: 61 },
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 100 },
  { name: "Virat", score: 84 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 }
];

const IndianTeam = ["Sachin", "Dhoni", "Virat", "Jadeja", "Raina", "Rohit"];

const T20Players = ["First Player", "Second Player", "Third Player"];
const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

const flag = true; 

function App() {
  return (
    <div>
      {/* Flag = true section */}
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>

      <hr />

      {/* Flag = false section */}
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <OddPlayers players={IndianTeam} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers players={IndianTeam} />
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    </div>
  );
}


export default App;
