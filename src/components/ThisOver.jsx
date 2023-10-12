import React from "react";

const ThisOver = ({ currentBowler, overScore, NBScore }) => {
  console.log(NBScore);

  const combinedScores = [];

  overScore.forEach((score, index) => {
    if (score === "WD" || score === "NB") {
      const nbScore = NBScore[index];
      if (nbScore !== undefined) {
        combinedScores.push(`${score} + ${nbScore}`);
      } else {
        combinedScores.push(`${score} +  `);
      }
    } else {
      combinedScores.push(score);
    }
  });
  return (
    <div className="thisover">
      <h3 className="thisoverheading">
        This Over{" "}
        <div style={{ color: "#307ecc", fontWeight: "600" }}>
          ({currentBowler.name})
        </div>{" "}
        <div>
          {" "}
          ({currentBowler.overs}.{currentBowler.balls})
        </div>{" "}
      </h3>

      <div className="thisoverscore">
        {combinedScores.map((score, index) => (
          <p key={index} style={{ margin: "5px 10px" }}>
            {score}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ThisOver;
