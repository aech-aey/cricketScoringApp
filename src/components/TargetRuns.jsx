import React from "react";

const TargetRuns = ({
  firstInningRuns,
  totalRuns,
  totalOvers,
  totalBalls,
  overs,
  secondInnings
}) => {
  return (
    <p style={{ fontSize: "20px" }}>
      {secondInnings ? (
        <span>
          Required{" "}
          <span style={{ color: "#307ecc" }}>
            {firstInningRuns + 1 - totalRuns}
          </span>{" "}
          in {overs * 6 - (totalOvers * 6 + totalBalls)}
        </span>
      ) : (
        ""
      )}
    </p>
  );
};
export default TargetRuns;
