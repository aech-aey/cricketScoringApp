import React from "react";

const Header = ({
  teamName,
  opponentTeamName,
  totalRuns,
  totalWickets,
  totalOvers,
  totalBalls,
  totalOversMatch,
  secondInnings
}) => {
  return (
    <div
      className="header"
      style={{ display: "flex", alignItems: "center", fontSize: "10px" }}
    >
      <h1 style={{ color: "#307ecc", textAlign: "center" }}>
        Team {secondInnings ? opponentTeamName : teamName}
      </h1>
      <h2 className="stats">
        {totalRuns}-{totalWickets} ({totalOvers}.{totalBalls} /{" "}
        {totalOversMatch})
      </h2>
      <h1 style={{ textAlign: "center" }}>
        Team {secondInnings ? teamName : opponentTeamName}
      </h1>
    </div>
  );
};

export default Header;
