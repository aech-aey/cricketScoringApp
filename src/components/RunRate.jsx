import React from "react";

const RunRate = ({ secondInnings, CRR, RRR }) => {
  return (
    <div className="runRate">
      <p>
        CRR:{isNaN(CRR) ? 0 : CRR}
        {secondInnings ? <span> | RR: {RRR.toFixed(2)} </span> : null}
      </p>{" "}
    </div>
  );
};
export default RunRate;
